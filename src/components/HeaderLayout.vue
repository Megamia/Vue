<template>
  <div class="mainheader">
    <div class="user">
      <span class="hi">Hello, Lekan</span>
      <span class="wishing">Have a nice day</span>
    </div>
    <div class="right">
      <div class="divicon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="icon">
          <path
            d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z"
          />
        </svg>
      </div>
      <div class="settinguser">
        <div class="avt"></div>
        <div class="nameNpermission">
          <span class="name">Lekan Okeowo</span>
          <span class="permission">Admin</span>
        </div>
        <div class="divicon2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="icon"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "HeaderLayout",
};
</script>

<style scoped>
.mainheader {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-inline: 50px;
  padding-top: 50px;
  background-color: #f5f5f5;
}
.user {
  display: flex;
  flex-direction: column;
}
.hi{
  font-weight: bold;
  font-size: 30px;
}
.wishing {
  color: gray;
  font-size: 20px;
  margin-top: 5px;
}
.right{
  display: flex;
  flex-direction: row;
  align-items: center;
}
.divicon {
  display: flex;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  border-right: 1px solid #bfbfbf;
}
.divicon2 {
  display: flex;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
}
.icon{
  width: 20px;
  height: 20px;
}
.settinguser{
  display: flex;
  flex-direction: row;
  padding-inline-start: 10px;
  align-items: center;
}
.avt{
  width: 40px;
height: 40px;
  background-color: #bfbfbf;
  border-radius: 100%;
  margin: 10px;
}
.nameNpermission{
  display: flex;
  flex-direction: column;
}
.name{
  font-weight: 600;
  margin-bottom: 5px;
}
.permission{
  font-size: 15px;
}
</style>