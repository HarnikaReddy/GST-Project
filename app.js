
        function calculate() {
            let Staters = document.getElementById("item1").value ? parseInt(document.getElementById("item1").value) : 0;
            let Chicken = document.getElementById("item2").value ? parseInt(document.getElementById("item2").value) : 0;
            let Biryani = document.getElementById("item3").value ? parseInt(document.getElementById("item3").value) : 0;
            let Burger = document.getElementById("item4").value ? parseInt(document.getElementById("item4").value) : 0;
            let Chinese = document.getElementById("item5").value ? parseInt(document.getElementById("item5").value) : 0;

            let subtotal = Staters + Chicken + Biryani + Burger + Chinese;
            let gst = subtotal * 18 / 100;
            let totalbill = subtotal + gst + 100; // Assuming 100 as additional charges

            document.getElementById("item6").textContent = `GST: ${gst.toFixed(2)}`;
            document.getElementById("totalbill").value = totalbill.toFixed(2);
        }
    

