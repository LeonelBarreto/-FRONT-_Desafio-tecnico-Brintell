import Header from '../../components/Header';
import GraphicBoard from '../../components/GraphicBoard';
import MapBoard from '../../components/MapBoard';
import TableBoard from '../../components/TableBoard';
import './styles.css';

function Main() {
  
  return (
    <div className="container">
      <Header />
      <main className='container-main'>
        <aside className='column-left'>
          <GraphicBoard />
          <MapBoard />
        </aside>
        <div className='column-right'>
          <button className='btn-purple'>+ Adicionar aluno</button>
          <TableBoard />
        </div>
      </main>
    </div>
  )
};

export default Main;