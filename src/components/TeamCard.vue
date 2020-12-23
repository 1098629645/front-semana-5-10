<template>
    <div class="align-self-stretch">
        
        <div class="card text-white bg-dark d-flex">
            <div class="d-flex justify-content-center p-2">
                <img :src= "member.image" alt="" height="200px">
                
            </div>
            <div class="card-body">
                <h5 class="card-title">{{member.nombre}}</h5>
                <p class="card-text">{{member.descripcion}}</p>
            </div>
            <div class="card-footer">
                <small class="text-muted">{{member.rol}} <br> Codigo: {{member.codigo}}</small>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TeamCard",
        props: ['member']
    }
</script>

<style scoped>

</style>
