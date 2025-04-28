// plugins/fingerprint.client.ts
import { defineNuxtPlugin } from '#app'
import FingerprintJS from '@fingerprintjs/fingerprintjs'

export default defineNuxtPlugin(async (nuxtApp) => {
  const fpPromise = FingerprintJS.load()
  nuxtApp.provide('fingerprint', fpPromise)
})
