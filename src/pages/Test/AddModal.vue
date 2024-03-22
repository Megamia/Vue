<template>
  <div class="main">
    <div class="about">
      <div class="title">
        <span>Add User</span>
        <button class="modal-default-button" @click="$emit('close')">X</button>
      </div>
      <div class="infor">
        <div class="userid">
          <input type="text" placeholder="User ID *" class="useridinput input" />
        </div>
        <div class="name">
          <div class="firstname">
            <input type="text" placeholder="First Name *" class="nameinput input" />
          </div>
          <div class="lastname">
            <input type="text" placeholder="Last Name *" class="nameinput input" />
          </div>
        </div>
        <div class="detail">
          <div class="detailup">
            <input type="text" placeholder="Email ID *" class="nameinput input" />
            <input type="text" placeholder="Mobile No" class="nameinput input" />
            <select v-model="selected" class="nameinput input">
              <option disabled value="">Please select one</option>
              <option>A</option>
              <option>B</option>
              <option>C</option>
            </select>
          </div>
          <div class="detaildown">
            <input type="text" placeholder="Username *" class="nameinput input" />
            <input type="text" placeholder="Password*" class="nameinput input" />
            <input type="text" placeholder="Confirm Password*" class="nameinput input" />
          </div>
        </div>
      </div>
      <div class="permission">
        <div class="titleper">
          <div class="moduleper">
            <span>Module Permission</span>
          </div>
          <div class="read">
            <span>Read</span>
          </div>
          <div class="write">
            <span>Write</span>
          </div>
          <div class="delete">
            <span>Delete</span>
          </div>
        </div>
        <div class="checkbox">
          <label class="moduleper">Spuer Admin</label>
          <div class="read">
            <input type="checkbox" value="read" id="read" />
          </div>
          <div class="write">
            <input type="checkbox" value="write" id="write" />
          </div>
          <div class="delete">
            <input type="checkbox" value="delete" id="delete" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.modal {
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  /* align-items: center; */
}
.modal > div {
  background-color: #fff;
  padding: 50px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  margin-inline: 200px;
  margin-block: 100px;
}
.main {
  display: flex;
  flex: 1;
  /* background-color: #9da0a9; */
  /* justify-content: center; */
  /* align-items: center; */
  /* opacity: 0.5; */

  /* justify-content: center; */
  /* align-items: center; */
}

.about {
  /* position: absolute; */
  display: flex;
  flex: 1;
  flex-direction: column;
  /* height: 700px; */
  width: 100%;
  /* justify-content: center; */
  /* right: 50%; */
  align-self: center;
  background-color: #fff;
}
.title {
  display: flex;
  /* flex: 1; */
  flex-direction: row;
  justify-content: space-between;
}
.input {
  padding: 20px;
}
.userid {
  display: flex;
  flex: 1;
}
.useridinput {
  display: flex;
  flex: 1;
}
.name {
  flex: 1;
  display: flex;
  flex-direction: row;
}
.nameinput {
  display: flex;
  flex: 1;
}
.firstname,
.lastname {
  display: flex;
  flex: 1;
}
.detail {
  display: flex;
  /* flex: 1; */
  flex-direction: column;
}
.detailup {
  display: flex;
  flex: 1;
  flex-direction: row;
}
.detaildown {
  display: flex;
  flex: 1;
  flex-direction: row;
}
.titleper {
  display: flex;
  flex: 1;
  flex-direction: row;
  padding: 20px;
  background-color: #eff4fa;
}
.moduleper {
  display: flex;
  width: 40%;
}
.read {
  display: flex;
  width: 20%;
  justify-self: start;
}
.write {
  display: flex;
  width: 20%;
}
.delete {
  display: flex;
  width: 20%;
}
.checkbox {
  display: flex;
  flex-direction: row;
  padding: 20px;
}
</style>
