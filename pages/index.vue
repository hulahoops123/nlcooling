<template>
    <div ref="mainContainerElement" class=" flex flex-col w-full h-screen  overflow-scroll bg-sky-900">
        <Head>
            <Title>NLCooling Durban</Title>
        </Head>
        <img src="../assets/logo_large.png" class="absolute w-full h-ull opacity-20 mx-auto my-auto -bottom-20 -right-32 mr-2" alt="">
        <div class="">
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
        </div>
  
        <div id="topMainDiv" class="flex flex-col h-screen font-staatliches items-center">
            <div name="top-name-and-logo" class="flex items-center w-full py-4 justify-center bg-gray-800/50 ">
                <img src="../assets/logo_large.png" class="w-8 h-8 mr-2 rounded-full bg-blend-saturation bg-gray-400/10 " alt="">
                <img src="../assets/nllogo.png" class="h-12 opacity-95" alt="">
            </div>
            <p name="headline" class="font-staatliches text-6xl px-4 text-neutral-200 mt-12 z-20 ">
                aircon specialists
            </p>
            <p name="tagline" class="font-raleway text-2xl px-4 text-neutral-200 mt-4 flex grow z-20 ">
                Durbans premier air-conditioning regas and repair specialists
            </p>
            <div class="w-full h-full bg-transparent flex flex-col justify-center items-center ">
                <div class=" flex justify-center w-1/3   px-1 outline outline-1 outline-green-400  font-raleway rounded-sm text-neutral-300 text-2xl font-bold bg-green-950/75">contact</div>

            </div>
        </div>

    </div>
</template>

<script setup>
const mainContainerElement = ref(null);
const { x, y, isScrolling, arrivedState, directions } = useScroll(mainContainerElement);

</script>

<style scoped lang="scss">

@function random_range($min, $max) {
  $rand: random();
  $random_range: $min + floor($rand * (($max - $min) + 1));
  @return $random_range;
}

.snow {
  $total: 200;
  position: absolute;
  width: 10px;
  height: 10px;
  background: white;
  border-radius: 50%;

  @for $i from 1 through $total {
    $random-x: random(1000000) * 0.0001vw;
    $random-offset: random_range(-100000, 100000) * 0.0001vw;
    $random-x-end: $random-x + $random-offset;
    $random-x-end-yoyo: $random-x + calc($random-offset / 2);
    $random-yoyo-time: calc(random_range(30000, 80000) / 100000);
    $random-yoyo-y: $random-yoyo-time * 100vh;
    $random-scale: random(10000) * 0.0001;
    $fall-duration: random_range(10, 30) * 1s;
    $fall-delay: random(30) * -1s;

    &:nth-child(#{$i}) {
      opacity: random(10000) * 0.0001;
      transform: translate($random-x, -10px) scale($random-scale);
      animation: fall-#{$i} $fall-duration $fall-delay linear infinite;
    }

    @keyframes fall-#{$i} {
      #{percentage($random-yoyo-time)} {
        transform: translate($random-x-end, $random-yoyo-y) scale($random-scale);
      }

      to {
        transform: translate($random-x-end-yoyo, 100vh) scale($random-scale);
      }
    }
  }
}

</style>