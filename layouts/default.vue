<template>
  <div class="flex flex-col items-center justify-center min-h-screen w-full">
    <div class="w-full max-w-6xl p-16">
      <div id="frame" class="w-full aspect-w-1 aspect-h-1 relative">
        <h1 class="sr-only">𝙈𝙊𝙍𝙏𝙀𝙇𝙀𝙉𝙏𝘼</h1>
        <svg
          class="
            w-full
            h-auto
            z-30
            pointer-events-none
            top-2/4
            transform
            -translate-y-2/4
          "
          viewBox="0 0 1080 336"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            class="fill-current text-white"
            d="M14 326.49h33.11l32.465-152.65.645-3.01h.215l-.645 3.01-19.35 152.65h19.35l44.29-152.65.645-3.01h.215l-.645 3.01L92.69 326.49h33.11l67.08-316.05h-39.56l-47.515 148.78-1.29 4.945h-.215l.86-4.945 15.48-148.78H81.08L14 326.49zM192.154 329.93c13.617 0 25.299-5.59 35.045-16.77 9.89-11.323 16.985-27.09 21.285-47.3l41.71-194.79c4.157-19.637 3.512-35.188-1.935-46.655C282.956 12.805 273.711 7 260.524 7c-13.33 0-25.083 5.805-35.26 17.415-10.176 11.467-17.343 27.018-21.5 46.655l-41.28 194.79c-4.013 20.21-3.44 35.977 1.72 47.3 5.16 11.18 14.477 16.77 27.95 16.77zm9.89-45.15c-2.006 0-3.368-1.792-4.085-5.375-.573-3.583-.358-8.098.645-13.545l41.71-194.79c1.147-5.733 2.724-10.32 4.73-13.76 2.15-3.44 4.3-5.16 6.45-5.16 2.15 0 3.44 1.72 3.87 5.16.574 3.297.287 7.883-.86 13.76l-41.71 194.79c-.86 5.16-2.365 9.603-4.515 13.33-2.15 3.727-4.228 5.59-6.235 5.59zM256.09 326.49h35.69l29.24-137.6h.215l-10.965 137.6h34.83l10.535-153.08c4.587-4.3 9.102-10.965 13.545-19.995 4.443-9.03 8.457-19.207 12.04-30.53a266.67 266.67 0 008.815-35.045c2.15-11.897 3.225-22.862 3.225-32.895 0-29.67-11.323-44.505-33.97-44.505h-36.12l-67.08 316.05zm72.67-174.15l20.425-95.89c4.443 0 7.167.573 8.17 1.72 1.003 1.147 1.505 4.157 1.505 9.03 0 8.027-1.003 16.913-3.01 26.66-2.007 9.747-4.587 19.063-7.74 27.95-3.153 8.887-6.45 16.197-9.89 21.93-3.44 5.733-6.593 8.6-9.46 8.6zM378.455 326.49h35.69l57.19-268.32h26.23l10.32-47.73h-88.15l-10.32 47.73h26.23l-57.19 268.32zM457.028 326.49h70.95l10.32-47.73h-35.69l18.49-86.86h25.8l10.75-50.74h-25.8l17.63-82.99h35.69l10.32-47.73h-71.38l-67.08 316.05z"
            fill="#ffffff"
          />
        </svg>
        <svg
          class="
            w-full
            h-auto
            z-10
            pointer-events-none
            top-2/4
            transform
            -translate-y-2/4
          "
          viewBox="0 0 1080 336"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            class="fill-current text-white"
            d="M547 326.05h72.24l9.46-43h-36.98L649.77 10h-35.69L547 326.05zM636.023 326.05h70.95l10.32-47.73h-35.69l18.49-86.86h25.8l10.75-50.74h-25.8l17.63-82.99h35.69L774.483 10h-71.38l-67.08 316.05zM727.556 326.05h33.11l31.82-150.07.645-3.44h.215l-.215 3.655-6.665 149.855h30.1L883.646 10h-33.11l-30.96 145.985-.43 3.225h-.215v-1.29L824.736 10h-30.1l-67.08 316.05zM858.535 326.05h35.69l57.19-268.32h26.23L987.965 10h-88.15l-10.32 47.73h26.23l-57.19 268.32zM929.367 326.05h34.83l18.49-64.5h19.783l-9.033 64.5h34.833L1066.97 10h-41.71l-95.893 316.05zm67.08-113.52l31.603-119.11.22-1.505h.43l-.22 1.505-18.7 119.11h-13.333z"
            fill="#ffffff"
          />
        </svg>
        <div id="scythe" class="z-20 top-2/4 transform -translate-y-2/4" />
      </div>
      <div
        class="
          flex
          items-center
          justify-center
          w-full
          font-mono font-bold
          text-white text-xs
          tracking-widest
          uppercase
        "
      >
        <Nuxt />
      </div>
    </div>
  </div>
</template>
<script>
import * as THREE from '../node_modules/three/build/three.module.js'
import { OBJLoader } from '../node_modules/three/examples/jsm/loaders/OBJLoader.js'

export default {
  beforeRouteLeave(to, from, next) {
    this.$nextTick(() => {
      next()
    })
  },
  head() {
    return {
      title: '𝙈𝙊𝙍𝙏𝙀𝙇𝙀𝙉𝙏𝘼',
    }
  },
  mounted() {
    this.$nextTick(() => {
      let camera, scene, renderer, object

      const frame = document.querySelector('#frame')
      const container = document.querySelector('#scythe')

      let mouseX = 0
      let mouseY = 0

      let windowHalfX = frame.clientWidth / 2
      let windowHalfY = frame.clientHeight / 2

      init()
      animate()

      function init() {
        camera = new THREE.PerspectiveCamera(
          45,
          frame.clientWidth / frame.clientHeight,
          1,
          1000
        )
        camera.position.z = 300

        scene = new THREE.Scene()

        const ambientLight = new THREE.AmbientLight(0xcccccc, 0.4)

        scene.add(ambientLight)

        const pointLight = new THREE.PointLight(0xffffff, 0.8)

        camera.add(pointLight)
        scene.add(camera)

        function loadModel() {
          object.traverse(function (child) {
            if (child.isMesh) child.material.map = texture
          })

          object.position.y = -85
          object.position.x = 0
          scene.add(object)
        }

        const manager = new THREE.LoadingManager(loadModel)

        const random = Math.floor(Math.random() * 1) + 0
        const bigSize = ['/texture-01.png']

        const textureLoader = new THREE.TextureLoader(manager)
        const texture = textureLoader.load(bigSize[random])

        const loader = new OBJLoader(manager)

        loader.load('scythe.obj', function (obj) {
          object = obj
        })

        renderer = new THREE.WebGLRenderer({ alpha: true })
        renderer.setPixelRatio(window.devicePixelRatio)
        renderer.setSize(frame.clientWidth, frame.clientHeight)

        container.appendChild(renderer.domElement)

        document.addEventListener('mousemove', onDocumentMouseMove)
        window.addEventListener('resize', onWindowResize)
      }

      function onWindowResize() {
        windowHalfX = frame.clientWidth / 2
        windowHalfY = frame.clientHeight / 2

        camera.aspect = frame.clientWidth / frame.clientHeight
        camera.updateProjectionMatrix()

        renderer.setSize(frame.clientWidth, frame.clientHeight)
      }

      function onDocumentMouseMove(event) {
        mouseX = (event.clientX - windowHalfX) / 10
        mouseY = (event.clientY - windowHalfY) / 10
      }

      function animate() {
        requestAnimationFrame(animate)

        render()
      }

      function render() {
        camera.position.x += (mouseX - camera.position.x) * 0.025
        camera.position.y += (-mouseY - camera.position.y) * 0.025
        camera.lookAt(scene.position)

        renderer.render(scene, camera)
      }
    })
  },
}
</script>
