<template>
<div>
<h1>Hello Home</h1>
<h2>{{data}}</h2>
</div>

    
</template>

<script>
export default{
    name : 'Home',
    props : {
        data : String
    }
}
</script>