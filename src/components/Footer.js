import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBInput
} from 'mdb-react-ui-kit';
import { Button } from 'react-bootstrap';

export default function Footer() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-left'>
      <MDBContainer className='p-4 pb-0'>
        <form action=''>
          <MDBRow className='d-flex justify-content-center'>
            <MDBCol size='auto' className='mb-4 mb-md-0'>
              <p className='pt-2'>
                <strong>Подпишитесь на нашу новостную рассылку</strong>
              </p>
            </MDBCol>

            <MDBCol md='5' size='5' className='mb-4 mb-md-0'>
              <MDBInput required type='text' id='form5Example2' label='Email адресс' />
            </MDBCol>

            <MDBCol size='auto' className='mb-4 mb-md-0'>
              <Button type="submit">Подтвердить</Button>
            </MDBCol>
          </MDBRow>
        </form>
      </MDBContainer>

      <div className='text-center p-3'>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-dark' href='http://localhost:3000/'>
          VeloTrain.ru
        </a>
      </div>
    </MDBFooter>
  );
}