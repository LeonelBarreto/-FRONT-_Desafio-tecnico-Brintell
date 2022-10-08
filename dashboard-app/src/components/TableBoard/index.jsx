import './styles.css';
import Edit from '../../assets/edit.svg';
import Delete from '../../assets/delete.svg';

function TableBoard() {
    return (
        <div className='container-table'>
            <div className='table-header'>
                <div className='table-header-name'>
                    <strong>NOME</strong>
                </div>
                <div className='table-header-cpf'>
                    <strong>CPF</strong>
                </div>
                <div className='table-header-gender'>
                    <strong>SEXO</strong>
                </div>
                <div className='table-header-email'>
                    <strong>E-MAIL</strong>
                </div>
                <div className='table-header-phone'>
                    <strong>TELEFONE</strong>
                </div>
                <div className='table-header-icons'>
                    <strong></strong>
                </div>
            </div>
            <div className='table-body'>
                <div className='table-line'>
                    <span className='table-line-name'>Jane Doe</span>
                    <span className='table-line-cpf'>123.456.789-00</span>
                    <span className='table-line-gender'>F</span>
                    <span className='table-line-email'>jane@email.com</span>
                    <span className='table-line-phone'>99 99999-9999</span>
                    <div className='table-line-icons'>
                        <img src={Edit} alt="editar" />
                        <img src={Delete} alt="deletar" />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default TableBoard;