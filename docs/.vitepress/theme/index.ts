import { h } from 'vue'
import Theme from 'vitepress/theme'

import './styles/rainbow.css'
import './styles/overrides.css'
import './styles/vars.css'
import './styles/bg.css'
// import "./styles/fonts.css";
// import "./styles/vitepress.css";
// import "./styles/homepage.scss";

// import HomePage from './components/HomePage.vue'
// import RegisterSW from './components/RegisterSW.vue'

import ZoomImg from './components/ZoomImg.vue'

export default {
    ...Theme,
    enhanceApp({ app }) {
        app.component('ZoomImg', ZoomImg)
    }
}
