<template>
  <div class="svgtext">
    <svg
        class="svg"
        viewBox="0 0 105.83333 52.916668"
        version="1.1">
      <defs
          id="defs6125" />
      <g
          inkscape:label="Layer 1"
          inkscape:groupmode="layer"
          id="layer1"
          transform="translate(0,-244.0833)">
        <text
            class="stext"
            xml:space="preserve"
            id="text6738"
            transform="rotate(-1.9982418)">
            <tspan
              class="tspan"
              sodipodi:role="line"
              id="tspan6736"
              x="-220.73165321"
              y="278.27707"
              style="">
              you're awesome
              <animate attributeType="XML" attributeName="x" from="-100" to="8" begin="4.8s" dur="1s" fill="freeze"/>
            </tspan>

        </text>
        <path
          class="text text1"
          d="m 15.875,254.40205 -4.233333,0 -3.704167,3.70417 v 3.43958 l 1.3229166,3.96875 2.1166674,1.5875 h 5.027083"
          id="path6832"
          inkscape:connector-curvature="0"
          sodipodi:nodetypes="ccccccc" />
        <path
            class="text text2"
            d="m 21.695833,253.6083 v 5.82083 8.73125 l 0.264584,-7.9375 L 25.4,258.3708 h 2.38125 l 0.79375,0.52917 0.264583,0.79375 0.264584,1.85208 0,6.61458"
            id="path6802"
            inkscape:connector-curvature="0" />
        <path
            class="text text3"
            d="m 36.247916,258.3708 h 5.027083 l 0.793751,0.52917 0.529167,1.05833 0.264583,0.45827 v 7.74381 l -0.264583,-5.29166 -1.852084,-0.52917 H 36.5125 l -0.529167,0.52917 -0.529166,0.79375 v 2.91041 l 0.79375,0.52917 0.529166,0.26458 h 3.175 l 2.645834,-1.5875"
            id="path6808"
            inkscape:connector-curvature="0" />
        <path
            class="text text4"
            d="m 51.064576,258.3708 v 8.99583 -5.82083 l 3.439583,-2.91042 2.38125,-0.26458 1.058333,0.52917 0.529167,0.79375 v 1.5875"
            id="path6814"
            inkscape:connector-curvature="0"
            sodipodi:nodetypes="cccccccc" />
        <path
            class="text text5"
            d="m 62.970842,254.40205 h 3.174999 v 0.26458 12.7 h -3.439583 6.614583"
            id="path6812"
            inkscape:connector-curvature="0"
            sodipodi:nodetypes="cccccc" />
        <path
            class="text text6"
            d="m 77.258332,263.39788 h 6.614584 v -2.91041 l -1.852083,-1.85209 H 78.316666 L 77.258333,259.42913 76.2,260.48747 v 4.23333 l 1.852083,2.64583 h 5.820833"
            id="path6820"
            inkscape:connector-curvature="0" />
        <path
            class="text text7"
            d="m 96.572916,258.46806 -1.816761,-0.58275 -4.580163,1.30518 -0.872793,0.79896 0.180609,1.59923 7.303971,1.49513 1.125913,1.05474 -0.255789,1.9987 c 0,0 0,0 0,0 l -5.343524,1.52272 -1.489798,-0.40081"
            id="path6822"
            inkscape:connector-curvature="0" />
        <path
            class="line line1"
            d="M 0,276 90,272 v 0"
            id="path6824"
            inkscape:connector-curvature="0" />
        <path
            class="line line2"
            inkscape:connector-curvature="0"
            id="path6826"
            d="M 0,277.5 92,273.5 v 0" />
        <path
            class="line line3"
            inkscape:connector-curvature="0"
            id="path6828"
            d="M 0,279.0 94,275 v 0" />
        <path
            class="line line4"
            d="M 0,280.5 96,276.5 v 0"
            id="path6830"
            inkscape:connector-curvature="0" />
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'svgtext'
}
</script>

<style lang="scss" scoped>
@keyframes drawText {
  to {
    stroke-dashoffset: 0;
  }
}
@keyframes drawLine {
  to {

    opacity: 1;
    stroke-dasharray: 126;
  }
}
@keyframes drawLine4 {
  70% {
    opacity: 1;
    stroke-dasharray: 128;
  }
  100% {
    opacity: 0.6;
    stroke-dasharray: 116;
  }
}
.svgtext {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}
.svg {
  width: 750px;
  height: 400px;
  border-radius: 20px;
  background: #ce526f;
}
.text {
  fill: none;
  stroke: rgb(241, 221, 221);
  paint-order:normal;
  stroke-width:1.8;
  stroke-linecap:round;
  stroke-linejoin: round;
  stroke-opacity:1;
  stroke-dasharray: 200;
  stroke-dashoffset: 200;
  animation: drawText 1.4s linear forwards;
}
.text1 {
  animation-delay: 0.2s;
}
.text2 {
  animation-delay: 0.4s;
}
.text3 {
  animation-delay: 0.8s;
}
.text4 {
  animation-delay: 1.4s;
}
.text5 {
  animation-delay: 1.8s;
}
.text6 {
  animation-duration: 1.4s;
  animation-delay: 2.4s;
}
.text7 {
  animation-delay: 2.8s;
}
.line {
  fill: none;
  stroke-linecap:round;
  stroke-opacity:1;
  stroke-dasharray: 0;
  stroke-dashoffset: 200;
  opacity: 0;
  animation: drawLine 2s linear forwards;
  &1 {
    stroke:#B5FFFC;
    stroke-width:0.8;
    animation-delay: 3s;
  }
  &2{
    stroke:#A4E887;
    stroke-width:0.8;
    animation-delay: 3.2s;
  }
  &3{
    stroke:#E8987E;
    stroke-width:0.8;
    animation-delay: 3.6s;
  }
  &4{
    stroke:#EA77FF;
    stroke-width:0.8;
    animation: drawLine4 2.4s linear forwards;
    animation-delay: 3.8s;
  }
}
.stext {
  font-style:normal;
  font-weight:normal;
  line-height:1.25;
  font-family:sans-serif;
  letter-spacing:0px;
  word-spacing:0px;
  fill-opacity:1;
  stroke-width:0.3;
  .tspan {
    font-size:5.8px;
    font-family:'MV Boli';
    fill: rgb(179, 210, 255);
    stroke:rgb(224, 183, 235);
    stroke-width:0.3;
  }
}
</style>
