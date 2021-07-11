import styled from 'styled-components'

const Loader = styled.div`
    border: 4px solid #f3f3f3; /* Light grey */
    border-top: 4px solid #A7B459; /* Blue */
    border-radius: 50%;
    width: 20px;
    height: 20px;
    animation: spin 1s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`

export default Loader;
