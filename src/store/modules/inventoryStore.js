export default {
    actions: {
        createGridItem( context ) {
            try {
                context.commit( 'updateGridItem' );
            } catch ( error ) {
                console.error( `Вознкла ошибка при создании массива сетки блока инвентаря!` );
                console.log( error );
            }
        },
        updateDraggabeItems( context, payload ) {
            try {
                context.commit( 'updateDraggabeItems', payload );
            } catch ( error ) {
                console.error( `Вознкла ошибка при передвигании инвентаря по ячейкам!` );
                console.log( error );
            }
        }
    },
    mutations: {
        updateGridItem( state ) {
            console.log( state.grid_item.length )
            if( !state.grid_item.length ) {
                for( let i=0; i<42; i++ ) {
                    state.grid_item.push({
                        id: i,
                        item: i + 1
                    })
                }
            }
        },
        updateDraggabeItems( state, payload ) {
            state.draggable_items = state.draggable_items.map(x => {
                if (x.id === payload.itemId) {
                    x.cellId = payload.targetId;
                }
                return x;
            });
        }
    },
    state: {
        grid_item: [],
        draggable_items: [
            {
                id: 0,
                title: 'АК-47',
                color: '#c85f5f',
                count: '3',
                cellId: 2
            },
            {
                id: 1,
                title: 'ТТ',
                color: '#ca2626',
                count: '3',
                cellId: 5
            },
            {
                id: 3,
                title: 'ППШ',
                color: '#28a971',
                count: '3',
                cellId: 12
            }
        ]

    },
    getters: {
        getGridItem: state => state.grid_item,
        getDraggableItems: state => state.draggable_items
    }
}