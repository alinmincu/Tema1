import { Injectable, signal } from '@angular/core';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  category: 'coffee' | 'dessert';
  imageUrl: string;
}

@Injectable({ providedIn: 'root' })
export class CoffeeService {
  private allProducts = signal<Product[]>([
    {
      id: 1,
      name: 'Espresso',
      price: 199,
      description: 'Rich Italian-style concentrated coffee shot with golden crema',
      category: 'coffee',
      imageUrl: 'https://plus.unsplash.com/premium_photo-1669687924558-386bff1a0469?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZXNwcmVzc298ZW58MHx8MHx8fDA%3D'
    },
    {
      id: 2,
      name: 'Iced Coffee',
      price: 149,
      description: 'Cold refreshing coffee drink, perfect for summer days',
      category: 'coffee',
      imageUrl: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aWNlZCUyMGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      id: 3,
      name: 'Chocolate Ice Cream',
      price: 189,
      description: 'Refreshing chocolate dessert',
      category: 'dessert',
      imageUrl: 'https://images.unsplash.com/photo-1599999182263-ce6c07e98764?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNob2NvbGF0ZSUyMGljZSUyMGNyZWFtfGVufDB8fDB8fHww'
    },
    {
      id: 4,
      name: 'Cappuccino',
      price: 179,
      description: '1/3 espresso, 1/3 steamed milk, 1/3 foam - perfection',
      category: 'coffee',
      imageUrl: 'https://images.unsplash.com/photo-1502165971801-35b35e7bbf9b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNhcHB1Y2Npbm98ZW58MHx8MHx8fDA%3D'
    },
    {
      id: 5,
      name: 'Chocolate Cake',
      price: 129,
      description: 'Rich and moist chocolate cake',
      category: 'dessert',
      imageUrl: 'https://media.istockphoto.com/id/1146471495/photo/chocolate-layer-cake.webp?a=1&b=1&s=612x612&w=0&k=20&c=a7SzEd36DEA5rb3UVnU2vt2nul3VRGCryC0wtDcayw8='
    },
    {
      id: 6,
      name: 'Latte',
      price: 169,
      description: 'Smooth espresso with velvety steamed milk in perfect harmony',
      category: 'coffee',
      imageUrl: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxASEhIQEBAPEhISEBAQDw8PDw8PDw8PFRIWFhURFRUYHSggGBolGxUVITEhJSktLi4uFx8zODMtNygtLisBCgoKDg0OFxAQFysdHR0rKy0tLSstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSstLS0rLS0rLS0tLS0rLS0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAEBQIDAAEGBwj/xAA+EAABAwMBBQUGBAMHBQAAAAABAAIDBBEhMQUSIkFRBmFxgZETIzKxwdEUM1KhQnKSB0NjorLh8BVUYoLC/8QAGAEAAwEBAAAAAAAAAAAAAAAAAAECAwT/xAAfEQEBAAICAwEBAQAAAAAAAAAAAQIREiEDEzFBUSL/2gAMAwEAAhEDEQA/AOOdayoAOVKQ2U4xhZt1L9FOJRlCnGEAXBoiIAhmHCMpdEEol+JaeMqE7j7TzREqqEGeMIVyNl0QLtUqYqDREAYVEAwi2NwkYKVmVIN4fJWThVk48kwSyfEiQMIWf4kUH4RUwXSBEs1Q1I5ENOUlrp/hQMDtUfMLtS2MZKCXuYoMVkhwqo2FI1oNyrd6yqGCrHBAMKBGlqC2fhH2VxNXQNwldfh48U0hOEp2n8Y8UFDqF3CPBU1BW6Y8IVVQUHAe7lLpzxJnGMpZU/Epq4e7N+FSkUdnt4Fa9qImhy1YplYq0W3J1AU6c4UHlUsfZSa2cc1KmKhI64UqcoAtoRMD0KCiadv1TILM7j80U8oSf8y3ein4ThKZEK8It6GelTgqlbdESv3QqKJXVYQaiXKiBhSut2wgEFT8asKjUM41NwKdTBlCjGBCUARrVK1rBghU+yFyiIlFyCBTa2VkQwq5hlXMbhBq36qxQc3KtDUAdRjCNBQVLoiwFUTREDsJXtbUHvTCAIDawwEAfA+7Qqpyq6R/CPBaq3YSNlOdUuqPiTClGEBMOIpVR7s34VY/VQ2Y3hCIljTicgpCxWmMrSpDiyqy3CItglVN0UKYG8PkrKMBbcOFVUpz5oMcdUdSj5ILcyjoB8k4RdMPe+aMqELL+Z5rq9ltb7NrmuDXG4eNzeLrOOb3HKy0xx5XSMstEkGx6mQb0cEjgdDu2B8L6rH9mqz/ALaX0H3Xe09S/d/NN+4buPVWwzuNxvnwICv1T+o9t/jhaTs9WDWBw8SwH5oh/ZyrP90B4yRj6rvIau1wSe7AU2VLjzHdwt0S9eJe3J527sxVi/ugbdHs+60dh1QH5D/Vp+q9KjJOp/YIhsF7XLvl8kevEe3J4pV7BqWnedTzBo1duOIHeSEHURL6AZSt6H+o/dBbfoYRBK90bXbsb3DfAdkNJ5hK4T8pzy39jxKiCKByqKZuQrHYKxdAkBVK9p08FW5iABm1RMZwqZW5V0LUBGTVWMWnrV0AfSosjCFpNESVUTVtOg9qtwjKdDbV+FFEUUR4QrakYCHoTdqIqc2SU3Hhvkl7jdyO0CXR/H6pG6DZj7BMA26XbPGEyjVRGSJCxWFYqZuB3eSiY1phRDdFDRB8R3ULTYd5pxHYhLHss7zRoGDG6FFxM+SEY/AR0L8eScKlFQ/3nmuh2XJwD+d37gLlJn++8yugoJbN/wDZv/0Psrw+py+OhjlwEfSuxdI4ZwmNPPwnxV2o0YRORkJS2B+iPhepKwyp0wgCXU7gmMDlSRkYSnto/do5z/huHrj6prG4LnP7RagCjcLjicwf5gfolaeM7jySn+JTmGVVTO4lfUDKwdSxjtFaRgIaIZRjm6JkAeMqYWpdVIBI2pFW9WyaqEpQB9CcIoobZ4wjWtVRFbgQ+0xwlGQMQ20xwlMQt2a7Hmjn8kr2ZzHemjhopWqndhL4jxo2rQsDONIH1EcBMItUuphgJlGFUTksWLW8sTQ8+at+05KDnKELVKx0D8FCPdlENPCg3nKAaQi4CNYLeiFpBgIsj5Kk1z7x77zRO1iRESOW6f8AMEJve+80ftJt4nfyn9hdI4TR1bxo939RR8G0pLW9o/UfxFKGFEwLnyta4n0W0Jce8fp+oo2n2jLf8x/9RSaM5R1N9Vjlb/WskdHR10l/jf8A1FOqepfjjd/UVztCMroaVmE8bRZP4ZQSOOpPqkH9oEtoY29Xj9mu+4XQ0zVyv9oj8wt7nn/SPutfHtnlpxlGOJF1IQ1OMomoW8QlT/ZGvQFNqjnppAVAytMdlSnGVprcpKafqoSqyR2VW5AMaDATEJdROwjwVURREQQtcMFERuVVVzTKEezhZxTG/EEHSDjKPe2xupWErX8VlRG6xut1vxhRsppnNK7ATKI5t3JZRnRMmDi8leKMkn3usUi5YqS86mdYqyE3yhak81dSHAWbQYRYIKYZR8p0QcoygjSlOAii/B8EHTHA8ES/LXeCpNII8y3Th7btt1wllGzjJTa+ECOVAsiaXVV1LbPeOjnfNX0Y5rmybYjodUwpPqgIEwoxosMmuJ7QN0XR0jUh2c3RdHSNV4QZDoAuH7fSXna39MQ/dx+y7yELzjtjJvVUn/iGN/y3+q3xjG0jh1Rcwx5ISAZRkmi0iahC8BGMdfKWSFGUuiYU1bsrInZChWaqMZ0SNOc5VKsk1VT3IBnRjCYMOEvojhHNVRFWMVdQ5WsVFQEwVsNpEzKWD8xMbpKA1Q4lRvZV9UdT3FCNKmnDukdcBN4h8kooNAnLFWKMmiFisssVs3mswWUeoU6hiroQRqs2o6U5Q0mqufkoebVIGcIwEVbgPghaf4UUXXYfBVE0rpjxFHXQVNqUYExCaui947vsfUBXQx2CNqWZBtyH2+i1G3uXNnO22LIGJlRx6KuBg6JpRxjGFz5RtDPZ0a6GlYltBH3J7TNW2GLPPJfG3C8q2+/eqag/4pH9I3fovXGNXjlS/efK79UsjvVxK3k0yl2HhblXz6KppyrZjhVBQTimFIcJbI5F0kmCgkao8S1bRamOVY1BxByHdqipGoSYpGabP0TNgSrZzsJtEVcZ1YhqtElDVAQCwNs5GnRCVGHBGHRJQaRmEBfKZOOCl1kqqHlAOEJpE5KdmSXanMLE8UZLFinZbVocIaJ5b8KEMRYMjyXpNRTRtBJAAC52OiE8tw3hGAr9Sfa52lp3uzurUtBJccK9Fg2fG0WAU3UjOiXqh+xw8dK/d+FWRwP3SN1dn+Fb0WvwreiOEHJ59DRyBxwt1UpYbFdzPTtAJsuIrWe2n3ANClcBtbuksY7xH7/7qcDD0TWrohGxje4+qHp4gsPJjqtcMuk4Iz0TijhOFRTQhOqSEYWPBpyGUcSc00aFo4x0TeFgW+OLDLNVPwsc7o1x9BdeMNo5LaL2raxtDJ/I4eosuMipm9FrjhKnlpwwo5P0qx1JIR8K7xtEzoFP8EzoFfrhXyV5nPRSD+FXUVLIQbBd9XULN08Iwluw3xkuaQL3T9UHsrln0El9FZHQydF3b4GdAptpW9FPDE+dcG+hkJ0Q1TsyTovRfwregWzSs6BHrg9leeQQvZghNqeJ50XSVVCwi4aEBs2ZrXljgAqnjhXOhG07+iHnp5Oi7JsbOgUXRM6BK4wTKvPqiilLhhFOpJN3Tku2bSs/SFI07OiXCHzrzyKJ5JbbK0dly5wu3q9ngcTWhEQPjIsQLhHrh865HZ2zpWtyE6pWu5hPomt6BXNp29AjhE3Okm6eixPfw7eixHEc3IyPdUP3Wflg8R6lNqWjawWaFKniZG0NYLD5qUkwHPJWtZN2WBqgJBp1UhKPIJG3uLC1R9qFCSUJKLtu1IZGTdI+ytAXOMzhqcIXtHX+2lEEZN97i8F1myohHG1vQBLZ1Xt2HgaehSWnXVO3XkNIuCHd2gv9FzFW0NO9Hd7TnhA3h3Ft7rLyY29xeF10ZU9sJzS2XIw7VY34t5v87XN+YTOn7QU4teVn9QWPxd7drSOTOJy5Ck7R0uPfM8N4E+iZR9oYSOEuf/K1y2x7Y0z27J7lw62H7rmmELVRtwzyGLdLWtbvEG1ycWupBmhsr3o5OlzCp7wVR6LXszdHIcU5zg+C5NlO6OfeIsHFdgGaXCA25E32TjgEC7SeqqXY+fBULAiN1A7BqBJCx4zcWPiMFMJXBouUa0m20K8qBmssfLfktxbpOBdTyXpQ+uZpn0SXaVC4uEsd8ZXUNpBzaPRSdDfACogGyaj2jRf4hghMAwLnq0up5BNbg0eB06roKepa9oc3INiLd6PpLGhbfHdWtClZBApnEDAuUA/Z7iS8YPROQ3KuaxTrat6KqKb+F2D380yYqq2gDx0INwRqqqectO4/B0aeTk/hfR4AWLSxGy04x+0ME6KkV/8AEemn0Vk+zt42zYG46F3TwH/NFWNkFx5WBvg53v8AnzT3Vais7TIF+ZBNtCO5VybXGAD0LvDv8UT/ANGbbe1G7pknH1VX/QRkm17Bz7d2QPAKOzmlMm2gOfQ6aeKV7T7Slos06gkmxwBqmtTsQC5NiT0PILj9sUW9I2JpuXu3b71w1osXW9beqV2fSewq8e0dPIcvJ3BqbLqGdomkYBI7kg2bstz5CwhnsmggHXANh5ki66NnZ11rC1jb0RunoRsjbofNEwDLngWPTmfRLdoxhji2Vl7PeAbuZhFQ9leLeMjmlvE1zDZzXDIIKlW0dThpma7eeGgvZZ7idL7pAJ8uacy61SuPeyXaj2CMmJ9rXu3e3rj1wi6OoiEYO8G8IJBfoUS/srO7+8i82f7FVDshNaxkjyB/C7prayXMcU27QgsBvg9LOJRmxa9jy8g2DW5JvujN7XK5LadA+Bwbdp4JH6EWDb58zhOOzMBlhPtLbu9Y8IGMYuR8sqp5P1Nw/B+wpvezyEXD5Tu21tbX0Gif/iBu4OLXFjp08QeSXR0rcMY1obxA2wNbtN+ZBBzqiooSN03/ADA5pBNmtLiHftY+blhlnut5hpL8QckC51He3S6aRGzbuxjxsgKeJ2SLF26cEnN28I8LBMPZmwAPhm9rWBB66O9EsbRlGQzXNlutgD2kFt8aLIY+oGgOpxk49LeqJAxa5GNefitMKzyn8c92ep3Qunivdge2WI30Y+9/IEH1RTKkve7OG4A7+pVLy5j2GQsdxPaHtcL+yO6CCAB0LvFoV+zYCHPBGjiCc5Jt9rJ5W7h4zW05InDPXdDjjHM3RVNH0/UeeCORCLZFcZ56joe5bhi05Wxa9/BORNre6VohX7q1urRkW7ToxI0sOhwfsuW2LtH8NM6llc6xd7pxFs82n1wu6fEHCxAPjoei5XtpsMys9qzD2WJI13RzHh90vi5306KN91aThcv2R2z7VphkxLFZrweeNQumLsfTGe5KiNxPvg6oliFYcY8fXKKZ0zpfkljRVllTUUwdqPA9FeFG6q1MKXRzg2aQQNCdVpOLLFKtlBpm35Z08Vs0ww3uyR90QDcXWm9c8vXonaNK3RDI7s417lr2Q9dfsrQOvM58VXLJYedvFGy0U7abG1jnEtB3TZx+i81oGGeV8guwA2aQPhF9BzJNz6rpe31faNsLdXHQjPqtdmqDciB0JzlRa1k/BWw9lMjLnHcL72baNrPZt/SCPJO/aePeVFjAbeGbfNSkbp3X07+qztaaZT5ydDa9ug0PcrHsa6WIX0eXYGLtYbArIG7oLuYFlOgaDI430YAR39UY/U5/B8rB8lRUttobcJF/SyLHVCVzrA5VZIxcD2l+Jw1LYmMHcHPyPQJr2ai90wWsGgm/U/qPVJNuSHekvklzfQLouzLvdDCnfStf6Mi24uBoDu65xgEcxzPktwQtwdBw2AOAALOx3q9g+pVzmgDT+FStXSsH+pxN+tw39kWGg21t38h/z5lRgYMZxYIiMd6vFGVU7vrfnzCt3eduWfRS3Bp5hWtaqkTaUbVewbpe0uFnDDWuAJ0JJyPJXUR3rOBuCLdSSDrfmt1EO+CL215XwpbJhaxu63QaEqp2L1DBjFMtW2NCkArY1EBYVItWw0ICFlF8d1dZZZMPO+1WypKeRtZTtJLHe8aL8TOYPh9V1ux69k8TJWG4cAe8dxTCeEOBBAN9brkKCQUNQ6BwtDM4vidyY46tPcp+L3ydbFbT63RMYQkbje+LFEBLYq6y0WrAphMkLLFasQRNvXNljjc9y2sU/ikHyWS3aFWGgn9OVixK1cjz+GQ1VSZn5Yw2Y09yf/iLkNaAAe9YsUVpgcQyboAAzzVjnWCxYs1pNdfCt2U3ieTrosWLTBl5Bz5bYQNdOACT0WLEsjxjgNqO3iSObh8112yAGxDwWLFO+la7FCZEukuMdFixJel0EuFdE71WLE5UZRPfyoyTLFitAbeVkbw2w71ixPA8jKJ1wrbrFi3jnrLrYKxYhLCVq6xYkpslI+0mzRNE4fxAXaeYPVYsSpz6V9lNrSA/hp8ubgO1uF1wKxYkq/VgcrmlYsQmp7qxYsQl/9k='
    },
    {
      id: 7,
      name: 'Tiramisu',
      price: 159,
      description: 'Classic coffee Italian dessert',
      category: 'dessert',
      imageUrl: 'https://plus.unsplash.com/premium_photo-1695028378225-97fbe39df62a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGlyYW1pc3V8ZW58MHx8MHx8fDA%3D'
    },
    {
      id: 8,
      name: 'Cannoli',
      price: 139,
      description: 'Italian pastry dessert',
      category: 'dessert',
      imageUrl: 'https://images.unsplash.com/photo-1667804957652-565b39dcccd4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2Fubm9saXxlbnwwfHwwfHx8MA%3D%3D'
    }
  ]);

  filteredProducts = signal<Product[]>(this.allProducts());

  searchProducts(query: string) {
    if (!query.trim()) {
      this.filteredProducts.set(this.allProducts());
      return;
    }
    this.filteredProducts.set(
      this.allProducts().filter(p =>
        p.name.toLowerCase().includes(query.toLowerCase())
      )
    );
  }
}