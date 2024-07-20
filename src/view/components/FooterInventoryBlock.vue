<template>
    <div class="body__footer panel">
        <div class="footer__text">
            <p>Все права защищены &COPY;</p>
        </div>
        <button class="footer__btn">
            <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
            </svg>
        </button>
    </div>
</template>

<script></script>

<style lang="scss" scoped>
.body__footer {
    position: relative;
    margin-top: 20px;
    width: 100%;
    height: 80px;
    padding: 10px 20px;

    @media ( max-width: 849px ) {
        height: 120px;
    }

    .footer__text {
        width: 97%;
        height: 100%;
        border-radius: 12px;
        background: rgb(130, 130, 130);
        display: flex;
        justify-content: center;
        align-items: center;

        p {
            font-size: 20px;
            text-align: center;
        }
    }

    .footer__btn {
        position: absolute;
        background: transparent;
        border: none;
        top: 10px;
        right: 20px;
        width: 20px;
        height: auto;

        svg {
            path {
                fill: white;
            }
        }
    }
}
</style>