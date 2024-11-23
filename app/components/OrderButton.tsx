// components/OrderButton.tsx
"use client";

import React from 'react';

type OrderButtonProps = {
  selectedOptions: any;
  selectedAccessories: any[];
  consoleSource: string;
  totalPrice: number;
};

const OrderButton: React.FC<OrderButtonProps> = ({
  selectedOptions,
  selectedAccessories,
  consoleSource,
  totalPrice,
}) => {
  

    function hashCode(str: string): number {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
          const char = str.charCodeAt(i);
          hash = (hash << 5) - hash + char;
          hash |= 0; // Convertir en entier 32 bits
        }
        // Limiter la valeur de l'ID à une plage compatible avec WooCommerce (par exemple entre 1 et 999)
        const minId = 1;
        const maxId = 999;
        const generatedId = Math.abs(hash) % (maxId - minId + 1) + minId;
        return generatedId;
      }

  // Fonction pour envoyer la commande à WooCommerce
  const sendOrderToWooCommerce = async () => {
    const { selectedCoque, selectedLaniere, selectedButton, selectedPad, selectedSticker, selectedBatterie, selectedScreen } = selectedOptions;

    const consumerKey = 'ck_bb8f230364904539050fff1a5b157f7378a00949';
    const consumerSecret = 'cs_1891b02d5b3cd3952c4c2e779c987a42284205c7';
  
    // Encodage des clés pour l'authentification Basic Auth
    const authHeader = 'Basic ' + btoa(`${consumerKey}:${consumerSecret}`);
    // Préparer les données à envoyer
    const orderData = {
      customer_note: consoleSource === 'company' ? "Console de l'entreprise" : 'Console du client',
      line_items: [
        // Ajouter les options sélectionnées
        ...Object.values(selectedOptions)
        .filter((item: any) => item?.option?._id)
        .map((item: any) => ({
          product_id: hashCode(item?.option?._id),
          name: item?.option?.name,
          description: item?.option?.description,
          price: item?.option?.price || 0,
          quantity:1,
        })),
        // Ajouter les accessoires sélectionnés
        ...selectedAccessories
        .filter(accessory => accessory._id)
        .map(accessory => ({
          product_id:hashCode(accessory._id),
          name: accessory.name,
          description: accessory.description,
          price: accessory.price,
          quantity:1
        })),
        // Frais pour la console de l'entreprise
        // ...(consoleSource === 'company'
        //   ? [{ name: 'Frais console entreprise', price: 40,quantity:1 }]
        //   : []),
        // Base de prix pour la personnalisation
        // { name: 'Prix de base', price: 149,quantity:1 },
      ],
      total: totalPrice,
    };
   console.log(selectedAccessories)
    try {
        console.log("Données envoyées à WooCommerce:", JSON.stringify(orderData, null, 2));
  
        const response = await fetch('http://localhost:3000/api/proxy/woocommerce', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(orderData),
        });
        console.log(orderData.line_items)
        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`Erreur lors de la commande : ${errorText}`);
        }
  
        const data = await response.json();
        console.log('Commande envoyée avec succès:', data);
  
        // Rediriger vers la page de commande WooCommerce
        if (data?.id) {
          const orderId = data.id;
          const payment_url = data.payment_url
          const redirectUrl = `${payment_url}`;
          window.location.href = redirectUrl;
        }
      } catch (error) {
        console.error('Erreur lors de la commande:', error);
        alert('Erreur lors de l’envoi de la commande. Veuillez réessayer.');
      }
    };
  

  return (
    <button
      onClick={sendOrderToWooCommerce}
      className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mt-4"
    >
      Passer la commande
    </button>
  );
};

export default OrderButton;
