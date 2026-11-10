import dados from '../datasets/data.json';

function InstituicoesDeEnsino() {
  return (
    <>
      <h1>Instituições de Ensino</h1>

      <table border="2px solid">
        <tr>
          <th>Instituição</th>
          <th>Município</th>
          <th>UF</th>
          <th>Básica</th>
          <th>Infantil</th>
          <th>Fundamental</th>
          <th>Médio</th>
          <th>Profissional</th>
          <th>EJA</th>
          <th>Especial</th>
        </tr>

        {dados.map((d) => (
          <tr key={d.CO_ENTIDADE}>
            <td>{d.NO_ENTIDADE}</td>
            <td>{d.NO_MUNICIPIO}</td>
            <td>{d.SG_UF}</td>
            <td>{d.QT_MAT_BAS}</td>
            <td>{d.QT_MAT_INF}</td>
            <td>{d.QT_MAT_FUND}</td>
            <td>{d.QT_MAT_MED}</td>
            <td>{d.QT_MAT_PROF}</td>
            <td>{d.QT_MAT_EJA}</td>
            <td>{d.QT_MAT_ESP}</td>
          </tr>
        )
        )
        }

      </table>

    </>

  );
}

export default InstituicoesDeEnsino;
