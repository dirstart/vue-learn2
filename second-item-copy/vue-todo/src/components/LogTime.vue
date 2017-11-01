<template>
  <div class="form-horizontal  jumbotron">
    <div class="form-group">
      <div class="col-sm-8">
        <label for="i_date">日期</label>
        <input type="date"
          class="form-control"
          placeholder="Date" 
          id="i_date" 
          v-model="date"
        />
      </div>
      <div class="col-sm-4">
        <label for="i_hour">时间</label>
        <input type="number" name="" id="i_hour" placeholder="Hour" class="form-control" v-model="hour">
      </div>
    </div>
    <div class="form-group">
      <div class="col-sm-12">
        <label for="memo">计划做什么呢？</label>
        <input type="text" class="form-control" placeholder="Comment" v-model="comment">
      </div>
    </div>
    <button class="btn btn-primary" @click="save()">保存</button>
    <router-link to="/time-entries" class="btn btn-danger">取消</router-link>
  </div>
</template>

<script>
export default {
  name: 'LogTime',
  data () {
    return {
      date: '',
      hour: '',
      comment: ''
    }
  },
  methods: {
    save () {
      this.hour = parseInt(this.hour)
      const plan = {
        name: Math.random() * 3,
        iamge: 'https://sfault-avatar.b0.upaiyun.com/888/223/888223038-5646dbc28d530_huge256',
        date: this.date,
        hour: this.hour,
        comment: this.comment
      }
      this.$store.dispatch('savePlan', plan)
      this.$store.dispatch('addHour', this.hour)
    }
  }
}
</script>