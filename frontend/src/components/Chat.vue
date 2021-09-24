<template>
  <div class="body d-flex flex-column justify-content-between">
    <ul id="messages">
      <li 
        v-for='( message, index ) in messages' 
        :class='{ self: isSelfMessage( message ) }'
        :key='index'
        > 
          {{ message.message }} 
      </li>
    </ul>
    <form class='p-1 d-flex position-fixed bottom-0 start-0 end-0' id="form" action="">
      <input 
      v-model.trim='input' 
      id="input" 
      class='border-0 px-3 m-1 rounded-pill' 
      autocomplete="off" 
      autofocus
      />
      <button @click.prevent='sendMesage' class='border-0 rounded m-1 px-3'>Send</button>
    </form>
  </div>
</template>

<script>
import { io } from 'socket.io-client'

export default {
  name: 'Chat',
  data() {
    return {
      input: '',
      self_id: null,
      username: null,
      messages: [],
      socket: io('http://localhost:3000') 
    }
  },
  methods: {
    sendMesage() {
      let msgId = new Date().toISOString()
      this.socket.emit('user message', {
        user_id: this.self_id,
        message: this.input,
        message_id: msgId
      })

      this.input = '' 
    },
    assignMsgOwnership( id ){
      this.self_id = id
    },
    addOwnMessage( message ) {
      console.log( message )
    },
    isSelfMessage( messageObj ) {
      if( messageObj.user_id === this.self_id ) {
        return true
      }
      return false
    }
  },
  mounted() {
    this.socket.on('connect', () => {
      console.log('connected')
      console.log( this.socket )
      this.assignMsgOwnership( this.socket.id )
    }),
    this.socket.on('user message', ( data ) => {
      this.messages.push( data )

      window.scrollTo(0, document.body.scrollHeight);
      console.log( this.messages )
    })
  }
}
</script>

<style scoped>
.body { 
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}

#form { 
  background: rgba(0, 0, 0, 0.15);
  height: 3rem;
  box-sizing: border-box;
  backdrop-filter: blur(10px);
}

#input { 
  flex-grow: 1;
}

#input:focus { 
  outline: none;
}

#form > button { 
  background: #333;
  outline: none;
  color: #fff;
}

#messages { 
  list-style-type: none;
  margin: 0; 
  padding: 0;
}
#messages > li { 
  padding: 0.5rem 1rem;
}

#messages > li:nth-child(odd) { 
  background: #efefef; 
}

.self {
  display: flex;
  justify-content: flex-end;
}

</style>
