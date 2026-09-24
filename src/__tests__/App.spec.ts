import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import { createMemoryHistory, createRouter } from 'vue-router'
import App from '../App.vue'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'

function makeRouter() {
  return createRouter({
    history: createMemoryHistory(),
    routes: [
      { path: '/', component: HomeView },
      { path: '/about', component: AboutView },
    ],
  })
}

describe('App', () => {
  it('renders the home page', async () => {
    const router = makeRouter()
    router.push('/')
    await router.isReady()
    const wrapper = mount(App, { global: { plugins: [router] } })
    expect(wrapper.find('h1').text()).toBe('Hello World')
  })

  it('navigates to the about page', async () => {
    const router = makeRouter()
    router.push('/')
    await router.isReady()
    const wrapper = mount(App, { global: { plugins: [router] } })
    await router.push('/about')
    expect(wrapper.find('h1').text()).toBe('About')
  })
})
