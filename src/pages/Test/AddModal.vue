<template>
  <div class="main">
    <div class="opa"></div>
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
        <!-- <div class="detailper">
        <v-checkbox label="Checkbox"></v-checkbox>
      </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      roles: [
        { role_id: 10, name: "foo" },
        { role_id: 20, name: "bar" },
        { role_id: 30, name: "baz" },
      ],
      user: {
        user_id: 100,
        name: "Demo User",
        roles: [
          { role_id: 10, enabled: true },
          { role_id: 20, enabled: false },
          { role_id: 30, enabled: false },
        ],
      },
    };
  },
};
</script>

<style scoped>
.main {
  display: flex;
  flex: 1;
  /* background-color: #9da0a9; */
  justify-content: center;
  align-items: center;
  /* opacity: 0.5; */

  /* justify-content: center; */
  /* align-items: center; */
}
.opa {
  display: flex;
  flex: 1;
  background-color: #9da0a9;
  opacity: 0.5;
  position: relative;
  height: 100vh;
  width: 100%;
}
.about {
  position: absolute;
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 80%;
  justify-content: center;
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
}
.moduleper {
  display: flex;
  width: 40%;
}
.read {
  display: flex;
  width: 20%;
}
.write {
  display: flex;
  width: 20%;
}
.delete {
  display: flex;
  width: 20%;
}
</style>
