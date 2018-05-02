<script>
  import $ from 'jquery'
  const DURATION = 25 * 60
  export default {
    computed: {
      mins () {
        return parseInt(this.duration / 60, 10)
      },
      secs () {
        return parseInt(this.duration % 60, 10)
      }
    },
    data () {
      return {
        duration: DURATION,
        running: false,
        done: false,
        timer: null,
        pomodoroCount: 0,
        clockShake: false,
        notiOptions: {
          body: '',
          title: 'Pomodoro App',
          icon: '/static/images/icon.png'
        }
      }
    },
    created () {
      // Request permission for notification
      if (window.Notification && window.Notification.permission !== 'denied' && window.Notification.permission !== 'granted') {
        window.Notification.requestPermission((permission) => {
          if (permission === 'granted') {
            this.notiOptions.body = 'Thank your for allowing notification.'
            var n = new window.Notification(this.notiOptions.title, this.notiOptions)
            n.close()
          }
        })
      }
    },
    mounted () {
      this.beep = document.getElementById('timer-beep-sound')
    },
    methods: {
      start () {
        this.running = true
        this.timer = this.countdown()
      },
      stop () {
        this.running = false
        clearInterval(this.timer)
      },
      reset () {
        // stop beep if it's sounding
        this.stopBeep()
        // reset duration to default
        this.duration = DURATION
        // reset button state
        this.done = false
        this.running = false
        // clear interval of countdown
        clearInterval(this.timer)
      },
      countdown () {
        var timer = this.duration
        return setInterval(() => {
          this.mins = parseInt(timer / 60, 10)
          this.secs = parseInt(timer % 60, 10)
          if (--timer < 0) {
            this.done = true
            this.clockShake = true
            // clear interval of countdown
            clearInterval(this.timer)
            // start playing beep
            this.playBeep()
            // increasing pomodoro count
            this.pomodoroCount++
            // show notification
            if (this.pomodoroCount % 4 === 0) {
              this.showNotification('Let\'s take a 15 - 30 minutes break.')
            } else {
              this.showNotification('Let\'s take a short 5 minutes break.')
            }
          } else {
            this.duration = timer
          }
        }, 1000)
      },
      playBeep () {
        this.beep.play()
      },
      stopBeep () {
        this.clockShake = false
        this.beep.pause()
      },
      showTodo () {
        $('.todo-wrapper').removeClass('slide_right')
        $('.clock-wrapper').removeClass('slide_right')
        $('.clock-wrapper').addClass('slide_left')
        $('.todo-wrapper').addClass('slide_left')
      },
      showNotification (message) {
        if (window.Notification.permission === 'granted') {
          this.notiOptions.body = message
          var n = new window.Notification(this.notiOptions.title, this.notiOptions)
          n.close()
        }
      }
    },
    filters: {
      time: t => t < 10 ? '0' + t : t
    }
  }
</script>