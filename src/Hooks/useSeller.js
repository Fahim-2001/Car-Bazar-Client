import { useEffect, useState } from "react";

const useSeller = (email) => {
  const [isSeller, setIsSeller] = useState(false);
  const [isSellerLoading, setIsSellerLoading] = useState(true);
  useEffect(() => {
    if (email) {
      fetch(
        `https://resale-shop-server-side.vercel.app/accounts/seller/${email}`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data.isSeller);
          setIsSeller(data.isSeller);
          setIsSellerLoading(false);
        });
    }
  }, [email]);
  return [isSeller, isSellerLoading];
};
export default useSeller;
