<template>
  <div>
    <div>
      <van-nav-bar title="会员中心" />
    </div>
    <div class="top">
      <h4>{{userName}}</h4>
      <img src=""
           class="top-img" />
    </div>

    <div class="login">

      <!--       <div>
        <van-button type="warning"
                    @click="Login">我要登录</van-button>
      </div>
      <div>
        <van-button type="primary"
                    @click="Register">我要注册</van-button>
      </div> -->
      <div>
        <van-button type="warning"
                    @click="Logout">退出</van-button>
      </div>
    </div>
    <div class="menber">
      <van-cell-group>
        <van-cell title="会员卡"
                  is-link />
        <van-cell title="地址管理"
                  is-link />
        <van-cell title="我的订单"
                  is-link />
        <van-cell title="会员权益"
                  is-link />
        <van-cell title="联系我们"
                  is-link />
      </van-cell-group>

    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      flag: localStorage['token'],
      userInfo: localStorage['userInfo'] ? JSON.parse(localStorage['userInfo']) : {}
    }
  },
  computed: {
    userName () {
      let user = this.userInfo
      return user.userName
    }
  },
  methods: {
    Logout () {
      localStorage.removeItem('userInfo')
      localStorage.removeItem('token')
      this.userInfo = {}
    },
    Login () {
      localStorage.setItem('path', this.$route.path)
      this.$router.push({
        name: 'Login'
      })
    },
    Register () {
      localStorage.setItem('path', this.$route.path)
      this.$router.push({
        name: 'Register'
      })
    }

  },
  created () {
    console.log(this.flag)
    console.log(this.userInfo)
    if (!this.flag) {
      localStorage.setItem('path', this.$route.path)
      this.$router.push({
        name: 'Login'
      })
    }
    document.scrollingElement.scrollTop = 0
  }

}
</script>

<style scoped>
.top-img {
  width: 70px;
  height: 70px;
  border-radius: 50px;
}
.top {
  height: 5rem;
  text-align: center;
  padding-top: 2rem;
  background-color: #eea2ad;
}
.login {
  display: flex;
  flex-direction: row;
  background-color: #fff;
  padding: 10px;
}
.login div {
  flex: 1;
  text-align: center;
}
/* .member {
  display: flex;
  flex-direction: row;
  background-color: #fff;
  padding: 10px;
} */
</style>
