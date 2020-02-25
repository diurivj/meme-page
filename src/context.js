import React, { createContext, Component } from 'react'
import { withRouter } from 'react-router-dom'
import AUTH_SERVICE from './services/auth'
import axios from 'axios'

export const MyContext = createContext()

class MyProvider extends Component {
  state = {
    formSignup: {
      name: '',
      email: '',
      password: ''
    },
    formLogin: {
      email: '',
      password: ''
    },
    loggedUser: null,
    isLogged: false,
    meme_templates: [],
    meme: {},
    isOpen: false,
    memeTexts: {
      text0: '',
      text1: '',
      text2: '',
      text3: '',
      text4: '',
      text5: '',
      text6: '',
      text7: '',
      text8: '',
      text9: ''
    },
    feed: null
  }

  // handleInput = (e, obj) => {
  //   const { name, value } = e.target
  //   obj[name] = value
  //   this.setState({ obj })
  // onChange={(e) => handleInput(e, 'formSignup')}

  // }

  async componentDidMount() {
    const { data } = await axios.get('https://api.imgflip.com/get_memes')
    const { memes } = await AUTH_SERVICE.FEED()
    this.setState({ meme_templates: data.data.memes, feed: memes })
  }

  objectToQueryParam = obj => {
    const params = Object.entries(obj).map(([key, value]) => `${key}=${value}`)
    return '?' + params.join('&')
  }

  handleMeme = meme => {
    this.setState({ meme, isOpen: true })
  }

  createMeme = async () => {
    const { meme, memeTexts } = this.state
    const params = {
      template_id: meme.id,
      username: 'diurivj',
      password: 'pepega2020',
      ...memeTexts
    }
    const query = this.objectToQueryParam(params)
    const { data } = await axios.post(
      `https://api.imgflip.com/caption_image${query}`
    )
    const photoURL = data.data.url
    const tags = ['lol', 'funny', 'pepega', 'trololol']
    const res = await AUTH_SERVICE.CREATE({ name: meme.name, tags, photoURL })
    this.setState({
      loggedUser: res.user,
      isOpen: false,
      feed: [res.meme, ...this.state.feed]
    })
    this.props.history.push('/profile')
  }

  onClose = () => {
    this.setState({ isOpen: false })
  }

  handleMemeInput = e => {
    const { memeTexts } = this.state
    const { name, value } = e.target
    memeTexts[name] = value
    this.setState({ memeTexts })
  }

  handleLogout = async () => {
    await AUTH_SERVICE.LOGOUT()
    this.props.history.push('/')
    this.setState({ loggedUser: null, isLogged: false })
  }

  handleSignupInput = e => {
    const { formSignup } = this.state
    const { name, value } = e.target
    formSignup[name] = value
    this.setState({ formSignup })
  }

  handleLoginInput = e => {
    const { formLogin } = this.state
    const { name, value } = e.target
    formLogin[name] = value
    this.setState({ formLogin })
  }

  handleSignupSubmit = async e => {
    e.preventDefault()
    const form = this.state.formSignup
    this.setState({ formSignup: { name: '', email: '', password: '' } })
    return await AUTH_SERVICE.SIGNUP(form)
  }

  handleLoginSubmit = e => {
    e.preventDefault()
    const form = this.state.formLogin
    return AUTH_SERVICE.LOGIN(form)
      .then(({ user }) => {
        this.setState({
          loggedUser: user,
          isLogged: true
        })
        return { user, msg: 'logged' }
      })
      .catch(err => {
        this.setState({
          loggedUser: null,
          isLogged: false,
          formLogin: { email: '', password: '' }
        })
        return { user: null, msg: 'Invalid username/password.' }
      })
      .finally(() => this.setState({ formLogin: { email: '', password: '' } }))
  }

  render() {
    const {
      state,
      handleSignupInput,
      handleSignupSubmit,
      handleLoginInput,
      handleLoginSubmit,
      handleLogout,
      handleMeme,
      onClose,
      handleMemeInput,
      createMeme
    } = this
    return (
      <MyContext.Provider
        value={{
          state,
          handleSignupInput,
          handleSignupSubmit,
          handleLoginInput,
          handleLoginSubmit,
          handleLogout,
          handleMeme,
          onClose,
          createMeme,
          handleMemeInput
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    )
  }
}

export default withRouter(MyProvider)
