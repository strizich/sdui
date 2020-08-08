export default {
  data () {
    return {
      userDefinedScheme: 'auto'
    }
  },
  watch: {
    userScheme (newValue, oldValue) {
      const el = document.body
      el.classList.add(this.setScheme(newValue))
      el.classList.remove(this.setScheme(oldValue))
    }
  },
  mounted () {
    this.getScheme()
    this.setScheme(this.userDefinedScheme)
  },
  methods: {
    getScheme () {
      const savedScheme = window.localStorage.getItem('sdui:UserScheme')
      if (savedScheme) {
        this.userDefinedScheme = savedScheme
      }
    },
    setScheme: function (value) {
      window.localStorage.setItem('sdui:UserScheme', this.userDefinedScheme)
      return `sd--layout--${value}`
    }
  }
}
