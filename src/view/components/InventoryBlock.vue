<template>
    <div class="panel__inventory panel" id="panel__inventory">
        <div class="inventory__grid-box">
            <div @drop="onDrop($event, elem.id)" @dragover.prevent @dragenter.prevent class="grid-item droppable-box" v-for="elem in getGridItem" :key="elem.id">
                <div @dragstart="onDragstart($event, drag_item)"
                     class="item__draggable"
                     v-for="drag_item in getDraggableItems.filter(x => x.cellId == elem.id)"
                     :key="drag_item.id"
                     draggable="true"
                     :style="`background: ${drag_item.color}`">
                     <p class="draggable__count">{{ drag_item.count }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';


export default {
    name: 'InventoryBlock',
    computed: {
        ...mapGetters(['getGridItem', 'getDraggableItems'])
    },
    methods: {
        onDragstart( event, item ) {
            event.dataTransfer.dropEffect = 'move';
            event.dataTransfer.effectAllowed = 'move';
            event.dataTransfer.setData( 'itemId', item.id.toString() );
        },
        onDrop(event, id) {
        const existingElement = this.getDraggableItems.find(x => x.cellId === id);
        if (!existingElement) {
            const itemId = parseInt( event.dataTransfer.getData( 'itemId' ) );
            const payload = {
                itemId: itemId,
                targetId: id
            }
            this.$store.dispatch( 'updateDraggabeItems', payload );
        } else {
            console.log("Элемент с таким ID уже находится в этой ячейке.");
        }
    }
    }
}
</script>

<style lang="scss" scoped>
.panel__inventory {
    width: 64%;

    @media ( max-width: 1024px ) and (min-width: 850px) {
        width: 52%;
    }

    @media ( max-width: 849px ) {
        width: 100%;
    }

    .inventory__grid-box {
        width: 100%;
        height: 100%;
        padding: 5px;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
        overflow: auto;
        grid-auto-flow: dense;

        .grid-item {
            width: 100%;
            min-height: 100px;
            border: 1px solid rgb(140, 140, 140);
            border-radius: 12px;
            display: flex;
            justify-content: center;
            align-items: center;

            .item__draggable {
                position: relative;
                width: 50%;
                height: 50%;
                background: #28a971;

                &::after {
                    content: '';
                    position: absolute;
                    left: -10px;
                    top: 10px;
                    width: 100%;
                    height: 100%;
                    box-shadow: 2px -2px 5px white;
                }

                .draggable__count {
                    position: absolute;
                    bottom: -10px;
                    right: 0;
                    width: 20px;
                    height: 20px;
                    background: rgb(255, 255, 255);
                    box-shadow: 0 0 3px rgb(80, 80, 80) inset;
                    border-radius: 12px 0 0 0;
                    color: rgb(0, 0, 0);
                }
            }
        }
    }
}
</style>