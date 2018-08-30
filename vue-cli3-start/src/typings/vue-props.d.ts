import Vue from 'vue'
import logger from '@/utils/logger'

declare module 'vue/types/vue' {
  interface Vue {
    $logger: typeof logger,
  }
}