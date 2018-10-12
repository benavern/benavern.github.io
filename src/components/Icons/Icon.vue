<template>
  <span :class="['icon', name && `icon-${name}`]">

    <svg
      v-if="name === 'settings'"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMin"
      viewBox="0 0 24 24"
      :width="size"
      :height="size">
      <circle
        cx="12" cy="12" r="3"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"/>

      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
        fill="none"
        :stroke="color"
        stroke-miterlimit="10"
        stroke-width="1.5"/>
    </svg>

    <svg
      v-else-if="name === 'search'"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      :width="size"
      :height="size">
      <g>
        <circle
          fill="none"
          :stroke="color"
          stroke-linejoin="round"
          stroke-width="3"
          cx="12" cy="12" r="11"/>
        <line
          fill="none"
          :stroke="color"
          stroke-linejoin="round"
          stroke-width="3"
          x1="20" x2="31" y1="20" y2="31"/>
      </g>
    </svg>

    <svg
      v-else-if="name === 'edit'"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      :width="size"
      :height="size">
      <g>
        <polyline
          fill="none"
          :stroke="color"
          stroke-linejoin="round"
          stroke-width="2"
          points="31 17 31 31 1 31 1 1 16 1"/>

        <polyline
          fill="none"
          :stroke="color"
          stroke-linejoin="round"
          stroke-width="2"
          points="23 19 13 19 13 10"/>

        <line
          fill="none"
          :stroke="color"
          stroke-linejoin="round"
          stroke-width="2"
          x1="13" x2="31" y1="19" y2="1"/>
      </g>
    </svg>

    <svg
      v-else-if="name === 'person'"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      :width="size"
      :height="size">
      <g>
        <circle
          fill="none"
          :stroke="color"
          stroke-linejoin="round"
          stroke-width="2"
          cx="16" cy="8" r="7"/>

        <path
          fill="none"
          :stroke="color"
          stroke-linejoin="round"
          stroke-width="2"
          d="M27,26A11,11,0,0,0,5,26v5H27Z"/>
      </g>
    </svg>

    <svg
      v-else-if="name === 'phone'"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50"
      :height="size"
      :width="size">
      <path d="M30.217,35.252c0,0,4.049-2.318,5.109-2.875  c1.057-0.559,2.152-0.7,2.817-0.294c1.007,0.616,9.463,6.241,10.175,6.739c0.712,0.499,1.055,1.924,0.076,3.32  c-0.975,1.396-5.473,6.916-7.379,6.857c-1.909-0.062-9.846-0.236-24.813-15.207C1.238,18.826,1.061,10.887,1,8.978  C0.939,7.07,6.459,2.571,7.855,1.595c1.398-0.975,2.825-0.608,3.321,0.078c0.564,0.781,6.124,9.21,6.736,10.176  c0.419,0.66,0.265,1.761-0.294,2.819c-0.556,1.06-2.874,5.109-2.874,5.109s1.634,2.787,7.16,8.312  C27.431,33.615,30.217,35.252,30.217,35.252z"
        fill="none"
        :stroke="color"
        stroke-miterlimit="10"
        stroke-width="2.5"/>
    </svg>

    <svg
      v-else-if="name === 'camera'"
      xmlns="http://www.w3.org/2000/svg"
      :height="size"
      :width="size"
      viewBox="0 0 50 50">
      <polygon
        fill="none"
        :stroke="color"
        points="49,14 36,21 36,29   49,36 "
        stroke-linecap="round"
        stroke-miterlimit="10"
        stroke-width="2"/>
      <path
        d="M36,36c0,2.209-1.791,4-4,4  H5c-2.209,0-4-1.791-4-4V14c0-2.209,1.791-4,4-4h27c2.209,0,4,1.791,4,4V36z"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-miterlimit="10"
        stroke-width="2"/>
    </svg>

    <svg
      v-else-if="name === 'info'"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50"
      :height="size"
      :width="size">
      <circle cx="25" cy="25" fill="none" r="24"
        :stroke="color"
        stroke-linecap="round"
        stroke-miterlimit="10"
        stroke-width="2"/>
      <path d="M23.779,16.241c-0.216,0-0.357-0.144-0.357-0.359v-2.618c0-0.215,0.142-0.359,0.357-0.359h2.439  c0.215,0,0.359,0.144,0.359,0.359v2.618c0,0.215-0.145,0.359-0.359,0.359H23.779z M23.852,37.293c-0.215,0-0.358-0.143-0.358-0.358  V20.473c0-0.215,0.144-0.359,0.358-0.359h2.295c0.216,0,0.359,0.144,0.359,0.359v16.462c0,0.216-0.144,0.358-0.359,0.358H23.852z"
        :fill="color"/>
    </svg>

    <template v-else>?</template>
  </span>

</template>

<script>
// https://www.iconfinder.com/icons/2123951/app_essential_input_ui_icon
export default {
  name: 'Icon',
  props: {
    name: String,
    size: {
      type: String,
      default: '1em'
    },
    color: {
      type: String,
      default: 'currentColor'
    }
  }
}
</script>

<style scoped>
.icon {
  display: inline-block;
}
</style>

