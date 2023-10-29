// ********** Segments *****************

export interface Segments {
  Linea: string;
  consumo: number;
  perdidas: number;
  costo: number;
}

export interface SegmentsState {
  segmentsData: Segments[];
  isLoading: boolean;
}

// ********** Clients *****************

export interface Clients {
    Linea: string;
    consumo_residencial: number;
    consumo_comercial: number;
    consumo_industrial: number;
    perdidas_residencial: number;
    perdidas_comercial: number;
    perdidas_industrial: number;
    costo_residencial: number;
    costo_comercial: number;
    costo_industrial: number;
  }
  
  export interface ClientsState {
    clientsData: Clients[];
    isLoading: boolean;
  }

// ********** WorstSegmentsByClients *****************

  export interface WorstSegments {
    TipoConsumo: string;
    Linea: string;
    Perdidas: number;
  }
  
  export interface WorstSegmentsState {
    worstSegmentsData: WorstSegments[];
    isLoading: boolean;
  }