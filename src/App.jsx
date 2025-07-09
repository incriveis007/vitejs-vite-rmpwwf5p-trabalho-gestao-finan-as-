import { addDoc, updateDoc, onSnapshot } from 'firebase/firestore';
import { db } from './firebase/configs.js';
import './index.css';
import { useEffect, useState } from 'react';



function App() {
  return (
    <div>
      <h1>Extrato bancario</h1>
      <br />
      <div>
        <input
          className="border-2 border-blue-500"
          type="text"
          placeholder="Adicionar Pessoa"
        />{' '}
        <button className="cursor-pointer rounded-2xl bg-blue-900 p-3">
          Adicionar
        </button>
        <input
          className="border-1 border-blue-500"
          type="text"
          placeholder="Adicionar Saldo "
        />{' '}
        <button className="cursor-pointer rounded-2xl bg-blue-900 p-3">
          Adicionar
        </button>
        <input
          className="border-2 border-blue-500"
          type="text"
          placeholder="Adicionar Data e hora"
        />{' '}
        <button className="cursor-pointer rounded-2xl bg-blue-900 p-3">
          Adicionar
        </button>
        <table className="border-2 w-80">
          <tr>
            <th>nome</th>
            <th>Saldo</th>
            <th>Data/hora</th>
          </tr>
          <tr>
            <td className="border-2">cleiton</td>
            <td className="border-2">R$2200</td>
            <td className="border-2">26/06/25 19:00</td>
          </tr>
        </table>
        <button className="rounded-2xl bg-blue-900 p-3 cursor-pointer  ">
          editar
        </button>
        <button className="rounded-2xl bg-blue-900 p-3 cursor-pointer ">
          excluir
        </button>
      </div>
    </div>
  );
}

export default App;
