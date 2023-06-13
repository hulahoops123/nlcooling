<template>
    <div ref="mainContainerElement" class="w-full h-screen overflow-y-scroll overflow-x-clip bg-sky-900">

        <Head>
            <Title>NLCooling Durban</Title>
        </Head>
        <!-- <img src="../assets/logo_large.png" class="absolute h-[800px] bottom-0 opacity-20 translate-x-36 overflow-clip  mr-2" alt=""> -->
        <div name="mainImageContainer" class="absolute bg-transparent h-full bg-tranparent w-full overflow-clip pointer-events-none">
            <img src="../assets/logo_large.png" class="object-contain h-4/5 translate-x-1/3 translate-y-44 opacity-30" alt="">
        </div>
        <div name="snowbody" class="pointer-events-none">
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
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
            <div class="snow"></div>
        </div>

        <div id="topMainDiv" class="flex w-full flex-col h-screen font-staatliches items-center">
            <div name="top-name-and-logo" class="flex items-center w-full py-4 justify-center bg-gray-800/50 ">
                <img src="../assets/logo_large.png" class="w-8 h-8 mr-2 rounded-full bg-blend-saturation bg-gray-400/10 "
                    alt="">
                <img src="../assets/nllogo.png" class="h-12 opacity-95" alt="">
            </div>
            <p name="headline" class="font-staatliches text-6xl px-4 text-neutral-200 mt-12 z-20 ">
                aircon specialists
            </p>
            <p name="tagline" class="font-raleway text-2xl px-4 text-neutral-200 mt-4 flex grow z-20 ">
                Durbans premier air-conditioning regas and repair specialists
            </p>
            <div name="ctaBlock" class="w-full h-full bg-transparent flex flex-col justify-center items-center">
                <div name="ctaSection" class="w-full max-w-lg h-40 w flex justify-center relative bg-transparent">
                    <img src="~/assets/aircon.png" class="absolute w-2/3 h-full bottom-0" alt="">
                    <div name="ctaButton" @click="ctaClicked" class="[transform-style:preserve-3d] origin-top animate-flap absolute bottom-9 flex justify-center gap-0.5 w-2/5 z-50 outline outline-2 outline-neutral-100  font-raleway rounded-t-md text-neutral-300 text-2xl font-bold bg-green-700">
                        <p>contact</p>
                        <img src="~/assets/whatsapp.png" class="h8 w-8" alt="">
                    </div>
                </div>
            </div>
        </div>
        <div id="bottomMainDiv" class="flex flex-col bg-neutral-200 w-full h-full items-center z-50">
            <p class="font-staatliches text-5xl my-6 font-black text-sky-900 tracking-widest">SERVICES</p>
        </div>
    </div>
</template>

<script setup>
const mainContainerElement = ref(null);
const { x, y, isScrolling, arrivedState, directions } = useScroll(mainContainerElement);


const ctaClicked = () => {
    alert('cta clicked')
};

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