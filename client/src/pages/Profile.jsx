import React, { useEffect, useState } from "react";
import { auth, db } from "../services/firebase";
import { doc, getDoc, collection, query, where, getDocs } from "firebase/firestore";

function Profile() {
  const [user, setUser] = useState(null);
  const [orderCount, setOrderCount] = useState(0);

  useEffect(() => {
    const fetchUserAndOrders = async () => {
      const uid = auth.currentUser?.uid;
      if (uid) {
        const userRef = doc(db, "users", uid);
        const userSnap = await getDoc(userRef);
        setUser(userSnap.data());

        const ordersRef = collection(db, "orders");
        const q = query(ordersRef, where("userId", "==", uid));
        const orderSnap = await getDocs(q);
        setOrderCount(orderSnap.size);
      }
    };

    fetchUserAndOrders();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">User Profile</h2>
      {user ? (
        <div>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Orders Placed:</strong> {orderCount}</p>
        </div>
      ) : (
        <p>Loading profile...</p>
      )}
    </div>
  );
}

export default Profile;
