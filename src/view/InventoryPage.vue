<template>
    <div class="wrapper__dark-theme">
        <div class="dark-theme__conteiner">
            <div class="conteiner__body">
                <div class="body__panel">
                    <InterfaceBlock />
                    <InventoryBlock />
                </div>
                <FooterInventoryBlock />
            </div>
        </div>
    </div>
</template>

<script>
import InterfaceBlock from './components/InterfaceBlock.vue';
import InventoryBlock from './components/InventoryBlock.vue';
import FooterInventoryBlock from './components/FooterInventoryBlock.vue';


export default {
    components: { InterfaceBlock, InventoryBlock, FooterInventoryBlock },
    mounted() {
        this.getGritItem();
    },
    methods: {
        getGritItem() {
            this.$store.dispatch('createGridItem');
        }
    },
}
</script>

<style lang="scss">
.wrapper__dark-theme {
    width: 100%;

    .dark-theme__conteiner {
        width: 100%;
        padding: 0 10%;
        display: flex;
        align-items: center;
        justify-content: center;

        @media ( max-width: 550px ) {
            padding: 0 3%;
        }

        .conteiner__body {
            margin: 70px 0;
            width: 100%;
            min-height: 90lvh;

            @media ( max-width: 600px ) {
                margin: 50px 0;
            }

            .body__panel {
                width: 100%;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                gap: 20px;

                @media ( max-width: 849px ) {
                    flex-direction: column;
                }
            }
        }
    }
}
</style>