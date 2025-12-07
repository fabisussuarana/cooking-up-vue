<template>
    <section>
        <span class="subtitulo-lg sua-lista-texto">
            Sua lista:
        </span>

        <ul v-if="ingredientes.length" class="ingredientes-sua-lista">
            <li v-for="ingrediente in ingredientes" :key="ingrediente" class="ingrediente">
                <!-- quando queremos que o valor de uma props seja setado como true, podemos abreviar, 
                nesse caso por exemplo em vez de :ativa="true", podemos usar apenas ativa -->
                <Tag :texto="ingrediente" ativa/>
            </li>
        </ul>
        <p v-else class="paragrafo lista-vazia">
            <img src="../assets/images/icones/lista-vazia.svg" alt="Ícone de pesquisa">
            Sua lista está vazia, selecione ingredientes para iniciar.
        </p>
    </section>
</template>

<script lang="ts">
    import Tag from './Tag.vue';

    export default {
        props: {
            ingredientes: {
                type: Array,
                required: true
            }
        },
        components: {
            Tag
        }
    }
</script>

<style scoped>
    .ingredientes-sua-lista {
        display: flex;
        justify-content: center;
        gap: 1rem 1.5rem;
        flex-wrap: wrap;
    }

    .lista-vazia {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: 0.25rem;

        color: var(--coral, #F0633C);
        text-align: center;
    }

    .sua-lista-texto {
        color: var(--coral, #F0633C);
        display: block;
        text-align: center;
        margin-bottom: 1.5rem;
    }
</style>