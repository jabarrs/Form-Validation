// import React, { Component } from 'react';

// export default class FormElment extends Component {
//   state = {
//     nama: '',
//     jurusan: '',
//     gender: '',
//     alamat: '',
//     member: false,
//   };

//   handleSubmit = () => {
//     alert(`
//     nama : ${this.state.nama}
//     jurusan : ${this.state.jurusan}
//     gender : ${this.state.gender}
//     alamat : ${this.state.alamat}
//     member : ${this.state.member ? 'YES' : 'NO'}
//     `);
//   };

//   render() {
//     return (
//       <div style={{ margin: '100px auto', border: '1px solid grey', padding: '20px' }}>
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             Nama : <input type="text" name="nama" onChange={(e) => this.setState({ nama: e.target.value })} />
//           </label>
//           <br />
//           <label>
//             Jurusan :
//             <select name="jurusan" onChange={(e) => this.setState({ jurusan: e.target.value })}>
//               <option value="">Pilih Jurusan</option>
//               <option value="Teknik Informatika">Teknik Informatika</option>
//               <option value="Sistem Informatika">Sistem Informatika</option>
//               <option value="Desain Visual">Desain Visual</option>
//             </select>
//           </label>
//           <br />
//           <label>
//             Jenis Kelamin :
//             <input type="radio" value="Laki-laki" name="gender" onChange={(e) => this.setState({ gender: e.target.value })} /> Laki-laki
//             <input type="radio" value="Perempuan" name="gender" onChange={(e) => this.setState({ gender: e.target.value })} /> Perempuan
//           </label>
//           <br />
//           <label>
//             Alamat :<textarea cols="30" rows="10" name="alamat" onChange={(e) => this.setState({ alamat: e.target.value })}></textarea>
//           </label>
//           <br />
//           <label>
//             Member : <input type="checkbox" checked={this.state.member} name="member" onChange={(e) => this.setState({ member: e.target.checked })} />
//           </label>
//           <br />
//           <br />
//           <button type="submmit">Submit</button>
//         </form>
//       </div>
//     );
//   }
// }
