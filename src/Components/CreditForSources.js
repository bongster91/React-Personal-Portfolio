import styled from "styled-components";

const Credit = styled.section`
    border-top: 1px solid black;
    grid-row: 10/11;

    h3 {
        font-style: italic;
        border-bottom: 1px solid black;
    }
`

function CreditForSources() {
    return (
        <Credit>
            <h3>Credit for sources</h3>

            <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
            </div>

            <div>Icons made by 
                <a href="https://www.flaticon.com/authors/iconixar" title="iconixar">iconixar</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
            </div>

            <div>
                <a href="https://www.aprimo.com/marketplace/microsoft-office/">MS Office</a>
                <a href="https://www.pngfind.com/download/immiibh_react-js-transparent-logo-hd-png-download/">JS</a>

                <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
            </div>
        </Credit>
    );
};

export default CreditForSources;