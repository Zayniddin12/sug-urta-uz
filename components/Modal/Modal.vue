<template>
  <Teleport to="body">
    <div
      :class="[wrapperClass, { '!opacity-100 !visible': show }]"
      class="fixed w-full h-full bg-black/[32%] flex justify-center z-[110] top-0 left-0 invisible opacity-0 transition-all duration-300 items-end p-0 pt-0"
      data-modal="wrapper"
      @click="handleOuterClick"
    >
      <Transition mode="out-in" name="mobile-modal">
        <div
          v-if="show"
          :class="[bodyClass, { animated: animationIn }]"
          class="bg-white w-full lg:max-w-xl shadow-xl relative max-h-[80vh] md:max-h-screen rounded-t-xl"
        >
          <div class="container pt-4">
            <div
              v-if="!noHeader"
              :class="[headerStyle]"
              class="flex items-center rounded-t-xl"
            >
              <slot name="header">
                <span
                  v-if="hasGoBack"
                  class="icon-chevron rotate-90 text-2xl cursor-pointer"
                  @click="$emit('goBack')"
                />
                <h3
                  :class="titleStyle"
                  class="w-full text-lg text-blue-400 leading-6 font-extrabold"
                >
                  {{ title }}
                </h3>
                <button
                  :class="closeButtonStyle"
                  class="text-20 size-8 rounded-xl text-gray-400 shrink-0 flex-center transition-300 bg-gray-700 active:scale-95 group"
                  @click="$emit('close')"
                >
                  <span
                    :class="closeIconClass"
                    class="icon-close group-hover:text-red transition-300"
                  />
                </button>
              </slot>
            </div>
            <button
              v-if="noHeader && hasCloseIcon"
              class="absolute -top-7 lg:-top-12 -right-0 lg:-right-[80px] active:scale-95 group"
              @click="$emit('close')"
            >
              <span
                class="icon-close text-[32px] icon-close text-sm text-gray group-hover:text-red transition-300"
              />
            </button>
            <slot />
          </div>
          <slot name="footer" />
        </div>
      </Transition>
    </div>
  </Teleport>
</template>

<script lang="ts" setup>
import { onMounted, watch } from 'vue'

interface Props {
  show?: boolean
  title?: string
  wrapperClass?: string | string[]
  modalClass?: string | string[]
  noHeader?: boolean
  disableOuterClose?: boolean
  bodyClass?: string | string[]
  hasCloseIcon?: boolean
  titleStyle?: string
  closeIconClass?: string
  headerStyle?: string
  closeButtonStyle?: string
  hasGoBack?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  title: 'Modal title',
  headerStyle: '',
  titleStyle: '',
  wrapperClass: '',
  bodyClass: '',
  modalClass: '',
  closeButtonStyle: '',
  closeIconClass: '',
})

interface Emits {
  (e: 'close'): void

  (e: 'outer-click'): void

  (e: 'goBack'): void
}

const emit = defineEmits<Emits>()
const animationIn = ref(false)

function handleOuterClick(e: Event) {
  const target = e.target as HTMLElement
  if (target.dataset?.modal == 'wrapper') {
    emit('outer-click')
    if (!props.disableOuterClose) {
      emit('close')
    } else {
      animationIn.value = true
      setTimeout(() => {
        animationIn.value = false
      }, 500)
    }
  }
}

watch(
  () => props.show,
  (val) => {
    if (process.client) {
      if (val) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = 'auto'
      }
    }
  }
)
onMounted(() => {
  if (process.client) {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !props.disableOuterClose) {
        emit('close')
      }
    })
  }
})
</script>

<style scoped>
@keyframes modal {
  from {
    opacity: 0;
    transform: translateY(-40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.modal-enter-active {
  animation: modal 0.3s ease-in-out;
}

.modal-leave-active {
  animation: modal 0.3s ease-in-out reverse;
}

@keyframes mobile-modal {
  from {
    opacity: 0;
    transform: translateY(50%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.mobile-modal-enter-active {
  animation: mobile-modal 0.5s ease-in-out;
}

.mobile-modal-leave-active {
  animation: mobile-modal 0.5s ease-in-out reverse;
}

.animated {
  animation: horizontal-shaking 0.4s ease-in-out;
}
</style>
