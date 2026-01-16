
import React from 'react';
import { Property } from '../types';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <div className="group relative glass rounded-3xl overflow-hidden liquid-shadow transition-all duration-700 hover:-translate-y-2">
      <div className="relative h-96 overflow-hidden">
        <img 
          src={property.image} 
          alt={property.title} 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2F4249]/80 to-transparent opacity-60"></div>
        
        <div className="absolute top-6 left-6 px-4 py-1.5 glass rounded-full text-[9px] font-bold uppercase tracking-widest border border-white/20">
          {property.type}
        </div>
      </div>
      
      <div className="p-8 relative -mt-12 bg-transparent">
        <div className="glass rounded-2xl p-6 border border-white/10">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-2xl font-serif text-white">{property.title}</h3>
          </div>
          <div className="flex items-center gap-2 text-white/40 text-xs mb-6 font-medium">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            {property.location}
          </div>
          
          <div className="flex justify-between items-center pt-6 border-t border-white/5">
            <div className="flex flex-col">
              <span className="text-[9px] uppercase tracking-widest text-white/30 mb-1">Стоимость</span>
              <span className="text-lg font-serif text-[#c5a059]">{property.price}</span>
            </div>
            <button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all group-hover:rotate-45">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
