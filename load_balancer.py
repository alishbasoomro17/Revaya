from mininet.topo import Topo

class LoadBalancerTopo(Topo):
    def build(self):
        switch = self.addSwitch('s1')
        client = self.addHost('h1', ip='10.0.0.1')
        server1 = self.addHost('h2', ip='10.0.0.2')
        server2 = self.addHost('h3', ip='10.0.0.3')
        server3 = self.addHost('h4', ip='10.0.0.4')

        self.addLink(client, switch)
        self.addLink(server1, switch)
        self.addLink(server2, switch)
        self.addLink(server3, switch)

topos = {'mytopo': (lambda: LoadBalancerTopo())}
