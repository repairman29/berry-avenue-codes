import SwiftUI
import WebKit

// MARK: - WKWebViewRepresentable
struct WebView: UIViewRepresentable {
    let url: URL
    
    func makeUIView(context: Context) -> WKWebView {
        let webView = WKWebView()
        webView.allowsBackForwardNavigationGestures = true
        webView.scrollView.bounces = false
        return webView
    }
    
    func updateUIView(_ uiView: WKWebView, context: Context) {
        let request = URLRequest(url: url)
        uiView.load(request)
    }
}

// MARK: - Main Content View
struct ContentView: View {
    // Replace this with your actual hosted web app URL
    let webAppURL = URL(string: "https://your-domain.com/index.html")!
    
    var body: some View {
        NavigationView {
            VStack(spacing: 0) {
                if let url = webAppURL {
                    WebView(url: url)
                        .edgesIgnoringSafeArea(.all)
                } else {
                    VStack {
                        Image(systemName: "exclamationmark.triangle")
                            .font(.system(size: 50))
                            .foregroundColor(.orange)
                        Text("Invalid URL")
                            .font(.title2)
                            .foregroundColor(.secondary)
                        Text("Please update the webAppURL in ContentView.swift")
                            .font(.caption)
                            .foregroundColor(.secondary)
                            .multilineTextAlignment(.center)
                            .padding()
                    }
                    .frame(maxWidth: .infinity, maxHeight: .infinity)
                }
            }
            .navigationTitle("Berry Avenue Codes")
            .navigationBarTitleDisplayMode(.inline)
        }
    }
}

// MARK: - Preview Provider
#Preview {
    ContentView()
} 