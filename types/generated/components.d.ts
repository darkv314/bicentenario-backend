import type { Schema, Attribute } from '@strapi/strapi';

export interface ProyectosGroupColors extends Schema.Component {
  collectionName: 'components_proyectos_group_colors';
  info: {
    displayName: 'groupColors';
    icon: 'chartBubble';
  };
  attributes: {
    bannerColor: Attribute.Enumeration<['azul', 'naranja', 'rojo', 'morado']> &
      Attribute.Required;
    textColor: Attribute.Enumeration<['azul', 'morado', 'verde', 'naranja']> &
      Attribute.Required;
  };
}

export interface ProyectosPalabrasClave extends Schema.Component {
  collectionName: 'components_proyectos_palabras_claves';
  info: {
    displayName: 'palabrasClave';
    icon: 'priceTag';
  };
  attributes: {
    palabraClave: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'proyectos.group-colors': ProyectosGroupColors;
      'proyectos.palabras-clave': ProyectosPalabrasClave;
    }
  }
}
