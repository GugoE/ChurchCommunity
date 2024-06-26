<template>
  <div class="benefits">
    <div class="benefits__content">
        <p  >Watch and listen</p  >
        <h1>THE BENEFITS OF JOINING OUR CHURCH</h1>
    </div>
    <div class="benefits__cards">
        <div>
            <img src="./img/benefit1.jpg" alt="">
            <div>
                <h5>WATCH AND LISTEN TO OUR SERMONS</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</p>
            </div>
        </div>
        <div>
            <img src="./img/benefit2.jpg" alt="">
            <div>
                <h5>WATCH AND LISTEN TO OUR SERMONS</h5>
            </div>
        </div>
        <div>
            <img src="./img/benefit3.jpg" alt="">
            <div>
                <h5>WATCH AND LISTEN TO OUR SERMONS</h5>
            </div>
        </div>
        <div>
            <img src="./img/benefit4.jpg" alt="">
            <div>
                <h5>WATCH AND LISTEN TO OUR SERMONS</h5>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.benefits{
    padding-top: 150px;
    height: 871px;
    background: #F5F2F0;
    width: 100%;
    &__content{
        width: 100%;
        position: relative;
        &>h1,p{
            position: absolute;
            width: 800px;
            left: 350px;
            text-align: center;
        }
        &>h1{
            top: 30px;
        }
    }
    &__cards{
        padding-left: 76px;
    display: flex;
    column-gap: 50px;
        &>div{
            position: relative;
            top: 300px;
            width: 302px;
            height: 384px;
            &>img{
                width: 100%;
                height: 100%;
            }
            &>div{
                position: absolute;
                bottom: 0;
                width: 280px;
                color: white;
                &>p{
                    opacity: 78%;
                }
            }
        }
        
    }
}   
</style>