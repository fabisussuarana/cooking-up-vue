<template>
    <!-- aria-pressed é uma boa prática de acessibilidade
    para informar aos leitores de tela o estado de um botão
    de alternância (selecionado/não selecionado) -->
    <button
    class="ingrediente"
    @click="aoClicar"
    :aria-pressed="selecionado">
        <Tag :texto="ingrediente" :ativa="selecionado"/>
    </button>
</template>

<script lang="ts">
    import Tag from './Tag.vue';

    export default {
        props: {
            ingrediente: {
                type: String,
                required: true
            }
        },
        components: {
            Tag
        },
        data() {
            return {
                selecionado: false,
            }
        },
        methods: {
            aoClicar() {
                this.selecionado = !this.selecionado;

                if(this.selecionado) {
                    // emit serve para emitir um evento personalizado para o componente pai
                    this.$emit('adicionarIngrediente', this.ingrediente);
                } else {
                    this.$emit('removerIngrediente', this.ingrediente);
                }
            }
        },
        emits: ['adicionarIngrediente', 'removerIngrediente'] // boa prática para declarar eventos emitidos
    }
</script>

<style scoped>
    .ingrediente {
        cursor: pointer;
    }
</style>