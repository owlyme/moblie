<template>
    <div>
        <!-- 第一层 -->
        <div @click.stop="checked(roles)"> <span class="box" :class="{bggreen: roles.checked}"></span> quanxuan</div>
        <div v-show="key != 'checked'" v-for="(value, key) in roles" :key="key">
            <div @click.stop="checked(value, roles)"><span class="box" :class="{bggreen: value.checked}"></span>{{key}}</div>
            <!-- 第二层 -->
            <div class="padding" v-show="value && _key != 'checked'" v-for="(_value, _key) in value" :key="_key">
                <div @click.stop="checked(_value, value, roles)"><span class="box" :class="{bggreen: _value.checked}"></span>{{_key}}</div>
                <!-- 第三层 -->
                <div class="roles-ids">
                <div class="padding" v-show="_value && _key_ != 'checked'" v-for="(_value_, _key_) in _value" :key="_key_">
                    <div class="" @click.stop="checked(_value_, _value, value, roles)" ><span class="box" :class="{bggreen: _value_.checked}"></span>{{_key_}}</div>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'selectgroup',
  data () {
    return {
      initCheckedList: [1, 2, 3, 4, 5, 6, 7, 8],
      checkedList: {},
      roles: {
        labelA: {
          labela: {
            label1: {id: 1},
            label2: {id: 2},
            label3: {id: 3}
          },
          labelaa: {
            label1: {id: 4},
            label2: {id: 5},
            label3: {id: 6}
          }
        },
        labelB: {
          labelb: {
            label1: {id: 7},
            label2: {id: 8},
            label3: {id: 9}
          }
        }
      }
    }
  },
  created () {
    this.init()
  },
  methods: {
    init () {
      const _init = (roles = {}, initCheckedList = [], updateLine = []) => {
        Object.values(roles).forEach(item => {
          if (item.id && initCheckedList.includes(item.id)) {
            this.$set(item, 'checked', true)
            // 初始化父节点
            this.updateParent([item, ...updateLine])
          }
          if (item.toString() === '[object Object]') {
            // 将当前节点通过参数传给下一个节点
            _init(item, initCheckedList, [item, ...updateLine])
          }
        })
      }
      _init(this.roles, this.initCheckedList, [this.roles])
    },
    checked () {
      // 通过arguments获取参数伪数组， [...arguments]将转化成数组
      let argList = [...arguments]
      // 当前节点进行直接操作， checked = true / false
      let curNode = argList.shift()

      if (!curNode.checked) {
        this.$set(curNode, 'checked', true)
        this.selectAll(curNode)
        this.updateParent(argList)
      } else {
        this.$set(curNode, 'checked', false)
        this.selectAll(curNode)
        this.cancelSelectAll(argList)
      }
    },
    selectAll (param) {
      // 通过选中父节点事件，
      let value = Object.values(param)

      if (param.checked) {
        this.getCheckedList(param, 1)
        // 将子节点全部选中
        value.forEach(item => {
          if (item.toString() === '[object Object]') {
            this.$set(item, 'checked', true)
            this.selectAll(item)
          }
        })
      } else {
        this.getCheckedList(param)
        // 将子节点全部不选
        value.forEach(item => {
          if (item.toString() === '[object Object]') {
            this.$set(item, 'checked', false)
            this.selectAll(item)
          }
        })
      }
    },
    getCheckedList (param, addOrDel) {
      // 获取选中的id
      if (addOrDel) {
        // 添加选中的id
        param.id && (this.checkedList[param.id] = true)
      } else {
        // 删除选中的id
        param.id && (delete this.checkedList[param.id])
      }
      this.$nextTick(() => {
        this.$emit('change', Object.keys(this.checkedList))
        console.log(Object.keys(this.checkedList))
      })
    },
    cancelSelectAll (param) {
      // 同步父节点的状态，根据兄弟节点的状态判断父节为取消状态
      param.forEach((item, index) => {
        item.checked = false
      })
    },
    updateParent (param) {
      // 同步父节点的状态，根据兄弟节点的状态判断父节点是否为选中状态
      const isAllChecked = (arg) => {
        let allChecked = true
        Object.values(arg).forEach(item => {
          if (item.toString() === '[object Object]' && !item.checked) {
            allChecked = false
          }
        })
        this.$set(arg, 'checked', allChecked)
      }
      param.forEach(item => {
        isAllChecked(item)
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.padding
    padding-left 20px
.box
  display inline-block
  width 20px
  height 20px
  border 1px solid #333
.bggreen
  background green
.roles-ids
  display flex
</style>
