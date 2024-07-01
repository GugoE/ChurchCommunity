<template>
  <div class="meet-members">
    <div class="meet-members__title">
        <h6>CHURCH MEMBER</h6>
        <h2>MEET OUR INSPIRATIONAL TEAM</h2>
    </div>
    <div class="meet-members__members">
        <div class="meet-members__members--member">
            <div class="member--pfp">
                <img src="./img/member1.jpg" alt="">
            </div>
            <div class="member--information">
                <h5>Kim Bowen</h5>
                <h6>Pastor, Church</h6>
            </div>
            <div class="member--links">
                <img src="./icons/Facebook.png" alt="">
                <img src="./icons/Twitter.png" alt="">
                <img src="./icons/Linkdin.png" alt="">
            </div>
        </div>

        <div class="meet-members__members--member">
            <div class="member--pfp">
                <img src="./img/member2.jpg" alt="">
            </div>
            <div class="member--information">
                <h5>Danielle Watkins</h5>
                <h6>Pastor, Church</h6>
            </div>
            <div class="member--links">
                <img src="./icons/Facebook.png" alt="">
                <img src="./icons/Twitter.png" alt="">
                <img src="./icons/Linkdin.png" alt="">
            </div>
        </div>
        <div class="meet-members__members--member">
            <div class="member--pfp">
                <img src="./img/member3.jpg" alt="">
            </div>
            <div class="member--information">
                <h5>Naomi Craig</h5>
                <h6>Pastor, Church</h6>
            </div>
            <div class="member--links">
                <img src="./icons/Facebook.png" alt="">
                <img src="./icons/Twitter.png" alt="">
                <img src="./icons/Linkdin.png" alt="">
            </div>
        </div>
        <div class="meet-members__members--member">
            <div class="member--pfp">
                <img src="./img/member4.jpg" alt="">
            </div>
            <div class="member--information">
                <h5>Santos Payne</h5>
                <h6>Pastor, Church</h6>
            </div>
            <div class="member--links">
                <img src="./icons/Facebook.png" alt="">
                <img src="./icons/Twitter.png" alt="">
                <img src="./icons/Linkdin.png" alt="">
            </div>
        </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.meet-members{
    padding: 50px 0 0 70px;
    text-align: center;
    height: 630px;
    &__members{
        display: flex;
        justify-content: center;
        column-gap: 50px;
        &--member{
            box-sizing: border-box;
            width: 302px;
            height: 366px;
            background: rgb(245, 242, 240);
            padding: 20px 0 0 60px;
                &>.member--pfp{
                    width: 152px;
                    height: 152px;
                    border-radius: 208px;
                    border: 8px;
                    &>img{
                        width: 100%;
                        height: 100%;
                        border-radius: 209px;
                        border: 8px solid white;
                    }
                }
                &>.member--information{
                    &>h6{
                        width: 167px;
                        margin-top: 0;
                        margin-bottom: 15px;
                    }
                    &>h5{
                        width: 175px;
                        margin-bottom: 10px;
                    }
                }
                &>.member--links{
                        display: flex;
                        justify-content: flex-start;
                        padding-left: 50px;
                        column-gap: 11px;
                    }
        }
    }
}
</style>