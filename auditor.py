import os
import re

valid_routes = [
    '/',
    '/about',
    '/alberta-crs-calculator',
    '/bc-crs-calculator',
    '/blog',
    '/blog/crs-draw-predictions',
    '/blog/crs-score-by-age',
    '/blog/crs-score-education',
    '/blog/crs-score-language-test',
    '/blog/crs-score-with-spouse',
    '/blog/express-entry-cutoff-history',
    '/blog/improve-crs-score-tips',
    '/blog/minimum-crs-score',
    '/canada-express-entry-eligibility',
    '/cec-crs-calculator',
    '/contact',
    '/crs-cutoff-scores',
    '/crs-score-for-canada-pr',
    '/express-entry-crs-calculator',
    '/express-entry-draw-results',
    '/fst-crs-calculator',
    '/fsw-crs-calculator',
    '/healthcare-crs-calculator',
    '/how-crs-is-calculated',
    '/how-to-improve-crs-score',
    '/ielts-crs-calculator',
    '/manitoba-crs-calculator',
    '/nova-scotia-crs-calculator',
    '/ontario-crs-calculator',
    '/pnp-crs-calculator',
    '/privacy-policy',
    '/saskatchewan-crs-calculator',
    '/stem-crs-calculator',
    '/terms-and-conditions',
    '/what-is-crs-score'
]

tool_pages = [
    '/',
    '/alberta-crs-calculator',
    '/bc-crs-calculator',
    '/cec-crs-calculator',
    '/express-entry-crs-calculator',
    '/fst-crs-calculator',
    '/fsw-crs-calculator',
    '/healthcare-crs-calculator',
    '/ielts-crs-calculator',
    '/manitoba-crs-calculator',
    '/nova-scotia-crs-calculator',
    '/ontario-crs-calculator',
    '/pnp-crs-calculator',
    '/saskatchewan-crs-calculator',
    '/stem-crs-calculator'
]

provincial_files = [
    'src/content/alberta_crs_calculator.html',
    'src/content/bc_crs_calculator.html',
    'src/content/manitoba_crs_calculator.html',
    'src/content/nova_scotia_crs_calculator.html',
    'src/content/ontario_crs_calculator.html',
    'src/content/saskatchewan_crs_calculator.html'
]

def audit():
    content_dir = 'src/content'
    component_dir = 'src/components'
    
    files = []
    for root, dirs, filenames in os.walk(content_dir):
        for filename in filenames:
            if filename.endswith('.html'):
                files.append(os.path.join(root, filename))
    for root, dirs, filenames in os.walk(component_dir):
        for filename in filenames:
            if filename.endswith('.tsx'):
                files.append(os.path.join(root, filename))

    broken_links = []
    provincial_missing = []
    blog_missing_tools = []
    malformed = []

    for file_path in files:
        with open(file_path, 'r') as f:
            content = f.read()
            
            # Find all links
            links = re.findall(r'href=["\']([^"\']+)["\']', content)
            links += re.findall(r'to=["\']([^"\']+)["\']', content)
            
            for link in links:
                if link.startswith('http') or link.startswith('#') or link.startswith('mailto:'):
                    continue
                
                # Check for malformed links
                if link.endswith('.html'):
                    malformed.append(f"{file_path}: Stale .html link: {link}")
                
                # Check for valid route
                clean_link = link.split('#')[0]
                if clean_link not in valid_routes:
                    broken_links.append(f"{file_path}: Broken link: {link}")
            
            # Check provincial calculators
            if file_path in provincial_files:
                has_cutoff = '/crs-cutoff-scores' in content
                has_improve = '/blog/improve-crs-score-tips' in content
                if not has_cutoff:
                    provincial_missing.append(f"{file_path}: Missing link to /crs-cutoff-scores")
                if not has_improve:
                    provincial_missing.append(f"{file_path}: Missing link to /blog/improve-crs-score-tips")
            
            # Check blog posts for tool links
            if 'blog__' in file_path:
                has_tool = any(tool in content for tool in tool_pages if tool != '/')
                # Special check for root tool '/'
                if not has_tool:
                    if not re.search(r'href=["\']\/["\']', content):
                        blog_missing_tools.append(f"{file_path}: Missing link to tool pages")

    print("--- BROKEN LINKS ---")
    for bl in sorted(set(broken_links)):
        print(bl)
        
    print("\n--- STALE .HTML LINKS ---")
    for m in sorted(set(malformed)):
        print(m)

    print("\n--- PROVINCIAL MISSING LINKS ---")
    for pm in provincial_missing:
        print(pm)

    print("\n--- BLOG MISSING TOOLS ---")
    for bm in blog_missing_tools:
        print(bm)

audit()
