import React from "react";
import styled from 'styled-components';
import { url } from "inspector";

const MapIcon = styled.div`
  width: 36px;
  height: 36px;
  border: 1px solid #656C81;
  border-radius: 100%;
  background: url('../../assets/icon_search/svg/icon_search.svg');
`
export const ShowMap = () => {
  return 
    (
      <div>
        <MapIcon />
      </div>
    );
}
