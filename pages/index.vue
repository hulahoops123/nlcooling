<template>
    <div ref="mainContainerElement" class="w-full h-screen overflow-y-scroll overflow-x-clip bg-blue-900">

        <Head>
            <Title>NLCooling Durban</Title>
        </Head>
        <!-- <div name="mainImageContainer2"
            class="absolute h-full bg-tranparent w-full overflow-clip pointer-events-none opacity-20 z-0">
            <img src="../assets/aclg.png" class="object-cover h-full w-full z-0 "
                alt="">
        </div> -->
                <!-- <div name="mainImageContainer2"
            class="absolute h-full bg-tranparent w-full overflow-clip pointer-events-none opacity-30 z-0">
            <img src="../assets/nllogo3.png" class="object-cover h-96 w-96 z-0 "
                alt="">
        </div> -->
        <!-- <div name="mainImageContainer"
            class="absolute h-full bg-tranparent w-full overflow-clip pointer-events-none opacity-40 z-0">
            <img src="../assets/logo_large.png" class="object-contain h-4/5 -translate-x-1/3 translate-y-44 z-0 "
                alt="">
        </div> -->
                <div name="mainImageContainer"
            class="absolute h-full bg-tranparent w-full overflow-clip pointer-events-none opacity-20 z-0">
            <img src="../assets/nllogo3.png" class="object-contain h-4/5 -translate-x-1/3 translate-y-44 z-0 "
                alt="">
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
            <div name="top-name-and-logo" class="flex items-center w-full py-4 justify-center bg-sky-950 z-50">
                <!-- <img src="../assets/nllogo3.png" class="w-12 h-12 mr-2 rounded-full bg-blend-saturation" alt=""> -->
                <img src="../assets/nllogo2.png" class="w-12 h-12 mr-2 rounded-full bg-blend-saturation" alt="">
                    <p class="font-staatliches tracking-wider text-neutral-100 text-5xl">COOLING</p>
                <!-- <img src="../assets/nllogo.png" class="h-12 opacity-95" alt=""> -->
            </div>
            <p name="headline" class="font-staatliches text-6xl px-4 text-neutral-200 mt-12 z-20 ">
                air-conditioning and refrigeration
            </p>
            <p name="tagline" class="font-raleway text-2xl px-4 text-neutral-200 mt-4 flex grow z-20 ">
                Durbans finest air-conditioning and refrigerator specialists
            </p>
            <div name="ctaBlock" class="w-full h-full bg-transparent flex flex-col justify-center items-center">
                <div name="ctaSection" class="w-full max-w-lg h-40 w flex justify-center relative bg-transparent">
                    <img src="~/assets/aircon.png" class="absolute w-2/3 h-full bottom-0" alt="">
                    <div name="ctaButton" @click="ctaClicked"
                        class="[transform-style:preserve-3d] origin-top animate-flap absolute bottom-9 flex justify-center gap-0.5 w-2/5 z-50 outline outline-2 outline-neutral-100  font-raleway rounded-t-md text-neutral-300 text-2xl font-bold bg-green-700">
                        <p>contact</p>
                        <img src="~/assets/whatsapp.png" class="h8 w-8" alt="">
                    </div>
                    <div ref="element" v-if="clickedCTAOnce" name="CallButton" 
                    v-motion :initial="{ opacity: 0, scale: 1.75 }"
                        :visible="{ opacity: 1, y: -100, scale: 1, transition: { duration: 1000, delay: 100, } }"
                        class="flex-col absolute top-0 flex justify-center gap-0.5 h-24 items-center w-3/5 z-50 outline outline-2 outline-neutral-100  font-staatliches rounded-xl text-neutral-300 text-4xl  bg-blue-700">
                        <p>📞 or call</p>
                        <a href="tel:083-244-7615">083 244 7615</a>
                        <!-- <img src="~/assets/whatsapp.png" class="h8 w-8" alt=""> -->
                    </div>
                </div>
            </div>
        </div>
        <div id="bottomMainDiv" class="flex flex-col bg-neutral-100/75 w-full h-full items-center z-50 backdrop-blur-sm">
            <div v-motion-fade-visible :delay="150"
                class="flex  w-full justify-center font-staatliches text-5xl py-6 font-black text-sky-900 tracking-widest drop-shadow-sm ">
                SERVICES</div>
            <div class="flex flex-col gap-12 font-raleway">
                <div class="flex w-full justify-center px-4 gap-4 items-center text-2xl flex-col md:flex-row md:px-40 md:justify-start">
                    <svg v-motion :initial="{ opacity: 0, scale: 1.75 }"
                        :visible="{ opacity: 1, y: 0, scale: 1, transition: { duration: 1000, delay: 100, } }"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                        class="w-14 h-14 ring-1 rounded-2xl bg-neutral-100/50 text-sky-900 p-1">
                        <path fill-rule="evenodd"
                            d="M12 6.75a5.25 5.25 0 016.775-5.025.75.75 0 01.313 1.248l-3.32 3.319c.063.475.276.934.641 1.299.365.365.824.578 1.3.64l3.318-3.319a.75.75 0 011.248.313 5.25 5.25 0 01-5.472 6.756c-1.018-.086-1.87.1-2.309.634L7.344 21.3A3.298 3.298 0 112.7 16.657l8.684-7.151c.533-.44.72-1.291.634-2.309A5.342 5.342 0 0112 6.75zM4.117 19.125a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008z"
                            clip-rule="evenodd" />
                        <path
                            d="M10.076 8.64l-2.201-2.2V4.874a.75.75 0 00-.364-.643l-3.75-2.25a.75.75 0 00-.916.113l-.75.75a.75.75 0 00-.113.916l2.25 3.75a.75.75 0 00.643.364h1.564l2.062 2.062 1.575-1.297z" />
                        <path fill-rule="evenodd"
                            d="M12.556 17.329l4.183 4.182a3.375 3.375 0 004.773-4.773l-3.306-3.305a6.803 6.803 0 01-1.53.043c-.394-.034-.682-.006-.867.042a.589.589 0 00-.167.063l-3.086 3.748zm3.414-1.36a.75.75 0 011.06 0l1.875 1.876a.75.75 0 11-1.06 1.06L15.97 17.03a.75.75 0 010-1.06z"
                            clip-rule="evenodd" />
                    </svg>
                    <p v-motion :initial="{ opacity: 0, scale: 0.8 }"
                        :visible="{ opacity: 1, y: 0, scale: 1, transition: { duration: 1000, delay: 100, } }"><span
                            class="font-semibold">Maintenance</span>
                        and repairs to commercial and domestic airconditioning units</p>
                </div>
                <div class="flex w-full justify-center px-4 gap-4 items-center text-2xl flex-col md:flex-row md:justify-start md:px-40">
                    <img v-motion :initial="{ opacity: 0, scale: 1.75 }"
                        :visible="{ opacity: 1, y: 0, scale: 1, transition: { duration: 1000, delay: 200, } }"
                    src="../assets/air-condition-icon.png" class="w-14 h-14 ring-1 rounded-xl bg-neutral-100/50 text-sky-900 p-1"  alt="">

                    <p v-motion :initial="{ opacity: 0, scale: 0.8 }"
                        :visible="{ opacity: 1, y: 0, scale: 1, transition: { duration: 1000, delay: 200, } }"><span
                            class="font-semibold" v-motion-roll-visible-bottom>Installation</span>
                        and
                        warranty of all new airconditioning units</p>
                </div>
                <div class="flex w-full justify-center px-4 gap-4 items-center text-2xl flex-col md:flex-row md:px-40 md:justify-start">
                    <img v-motion :initial="{ opacity: 0, scale: 1.75 }"
                        :visible="{ opacity: 1, y: 0, scale: 1, transition: { duration: 1000, delay: 200, } }"
                    src="../assets/fridge-icon.png" class="w-14 h-14 ring-1 rounded-xl bg-neutral-100/50 text-sky-900 p-1"  alt="">
                    <p v-motion :initial="{ opacity: 0, scale: 0.8 }"
                        :visible="{ opacity: 1, y: 0, scale: 1, transition: { duration: 1000, delay: 200, } }"><span
                            class="font-semibold" v-motion-roll-visible-bottom>Refrigerator</span>
                        maintenance and repairs, including compressor testing</p>
                </div>
                <p v-motion :initial="{ opacity: 0, scale: 0.8 }"
                        :visible="{ opacity: 1, y: 0, scale: 1, transition: { duration: 1000, delay: 300, } }"
                class="w-full px-4 text-2xl bg-sky-900 text-neutral-200 py-4 md:flex-row md:px-40 md:justify-start">
                    With thousands of happy clients and succesful installations, <em>NLCooling </em> is your solution to any airconditioner and refrigerator needs in and around Durban.<br><br> <span class="underline" @click="ctaClicked" >Contact</span> us now.
                </p>
            </div>
            <div class="flex justify-center z-50 bg-black opacity-100">
            <!-- <img src="../assets/aclg.png" class=" w-full flex justify-center object-cover"/> -->
        </div>
        <p class="bg-sky-900 h-40 z-50 text-neutral-400 font-raleway py-4 flex justify-center text-xs w-full ">©️NLCooling 2023 all rights reserved</p>

        </div>

    </div>
</template>

<script setup>
const mainContainerElement = ref(null);
const { x, y, isScrolling, arrivedState, directions } = useScroll(mainContainerElement);
const clickedCTAOnce = ref(false);
const element = ref();
onClickOutside(element, () => {
    clickedCTAOnce.value=false;
});


const ctaClicked = () => {
    clickedCTAOnce.value = true;
    if (navigator.maxTouchPoints > 0) {
        window.open('https://api.whatsapp.com/send?phone=27832447615&text=Hi%20NLCooling%20.I%20need%20some%20help%20with%20')
    } else {
        window.open('https://web.whatsapp.com/send/?phone=27832447615&text=Hi+NLCooling+.I+need+some+help+with+')
    }
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