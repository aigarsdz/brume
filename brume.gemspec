# coding: utf-8

Gem::Specification.new do |spec|
  spec.name          = "brume"
  spec.version       = "1.1.1"
  spec.authors       = ["Aigars Dzerviniks"]
  spec.email         = ["dzerviniks.aigars@outlook.com"]

  spec.summary       = %q{It's simple. It's easy to use. It's a Jekyll theme.}
  spec.homepage      = "https://github.com/aigarsdz/brume"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r{^(assets|_layouts|_includes|_sass|LICENSE|README)}i) }

  spec.add_runtime_dependency "jekyll", "~> 3.4"

  spec.add_development_dependency "bundler", "~> 1.12"
  spec.add_development_dependency "rake", "~> 10.0"
end
