# share-on-network (file sharing on local network)

## Tech Stack used
- Nextjs with server action
- TailwindCSS

## How it works ?

There are two important things to note
1. With server action, we can take advantage of the server(using nodejs) from a Nextjs app.
2. Running a local dev server, also allow us to access the webapp on the local network using our device IP.

Using `share-on-network`, a user can run the development environment on their personal computer and that will work as a server on the network.Anyone can access the webpage who is connected to same wireless/LAN network.

### Repository Structure
<img width="753" alt="Screenshot 2025-03-31 at 11 30 14 PM" src="https://github.com/user-attachments/assets/4c77f23a-6a7e-4dd3-b802-0ac11e16c31e" />
<br/>
chart credits: https://gitdiagram.com/ankitzm/share-on-network

### Getting IP Address

On terminal/powershell, you can run the below commands to get IP address of your system.

- windows - `ipconfig`
- linux/mac - `ifconfig` or `hostname -I`

**OUTPUT(terminal)**
1. `ifconfig`
```
ankit@dev:~/share-on-network$  ifconfig

eno1: flags=4099<UP,BROADCAST,MULTICAST>  mtu 1500
        ether 16:ab:59:53:54:89  txqueuelen 1000  (Ethernet)
        RX packets 0  bytes 0 (0.0 B)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 0  bytes 0 (0.0 B)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0

lo: flags=73<UP,LOOPBACK,RUNNING>  mtu 65536
        inet 127.0.0.1  netmask 255.0.0.0
        inet6 ::1  prefixlen 128  scopeid 0x10<host>
        loop  txqueuelen 1000  (Local Loopback)
        RX packets 213658  bytes 125412514 (119.6 MiB)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 213658  bytes 125412514 (119.6 MiB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0

wlp3s0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
        inet 192.168.1.180  netmask 255.255.255.0  broadcast 192.168.1.255
        inet6 e480::3a7d:1x6b:824:89e  prefixlen 64  scopeid 0x20<link>
        ether 16:ab:59:53:54:89  txqueuelen 1000  (Ethernet)
        RX packets 8456258  bytes 10732702507 (9.9 GiB)
        RX errors 0  dropped 4  overruns 0  frame 0
        TX packets 3878712  bytes 698752746 (666.3 MiB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0
```

The command will give you all the network interfaces present on the device and the IP after inet is the IP of the interface. The interface name might differ on your system.

- `eno1`   - ethernet
- `lo`     - localhost
- `wlp3s0` - wireless network

My IP in this case is - `192.168.1.180` (I am connected to a wifi)

2. `hostname -I`
```
ankit@dev:~/share-on-network$  hostname -I
192.168.1.180
```

## Accessing Webpage

The code will run on PORT 3000 by default and can be accessed using `localhost:3000` or `localhost:${PORT}` if port 3000 is busy.

### On network

Suppose your IP is `192.168.1.180` and the code is running on PORT `3000`, so the URL on you application on local network will be `192.168.1.180:3000`, it can be accessed by any of the device connected on same network.

The link will look like this: `${IP_Address}:${PORT_Number}`

## Little Demo

**Desktop**
https://github.com/ankitzm/share-on-network/assets/66105983/02c1a463-971d-4581-8767-87674c3281a1

**Mobile**
https://github.com/ankitzm/share-on-network/assets/66105983/f0ebeb3e-fc6d-454d-9a98-ee4c5b9a3111


